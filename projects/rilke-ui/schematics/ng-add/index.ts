import { normalize, strings, workspaces } from '@angular-devkit/core';
import {
	Rule,
	MergeStrategy,
	SchematicContext,
	SchematicsException,
	Tree,
	apply,
	applyTemplates,
	chain,
	noop,
	mergeWith,
	move,
	url,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addExportToModule, addImportsForStyle, addImportToModule } from '../utility/ast-utils';
import * as ts from '../third_party/files/typescript';
import { InsertChange } from '../utility/change';
import { findModule, findModuleFromOptions, LAYER_EXT, ModuleOptions } from '../utility/find-module';
import { buildDefaultPath, getWorkspace } from '../utility/workspace';

function addStyleToWorkspaceFile(workspace: workspaces.WorkspaceDefinition): Rule {
	return (host: Tree) => {
		const project = workspace.projects.get(workspace.extensions.defaultProject as string);

		const projectName = workspace.extensions.defaultProject as string;

		if (!project) {
			throw new SchematicsException(`Project does not exist.`);
		}

		let configPath = './angular.json';

		if (host.exists(configPath)) {
			let currentAngularJson = host.read(configPath)!.toString('utf-8');
			let json = JSON.parse(currentAngularJson);
			let optionsJson = json['projects'][projectName]['architect']['build']['options'];

			let styles = [
				"src/assets/rilke-ui/style/styles.scss"
			];

			styles.forEach((s) => {
				if (!optionsJson['styles'].includes(s)) {
					optionsJson['styles'].push(s);
				}
			})

			json['projects'][projectName]['architect']['build']['options'] = optionsJson;
			host.overwrite(configPath, JSON.stringify(json, null, 2));
		} else {
			throw new SchematicsException('angular.json not found at ' + configPath);
		}
		return host;
	}
}

function addImportBundleScss(): Rule {
	return (host: Tree) => {
		const fileToAdd = 'src/assets/rilke-ui/components.scss';

		const literal = `@use "sass:math";
@import './palette';
@import './structure';
@import './typography';

`;

		const addVariables = addImportsForStyle(fileToAdd, literal) as InsertChange;

		if (addVariables) {
			const recorder = host.beginUpdate(fileToAdd);
			recorder.insertLeft(addVariables.pos, addVariables.toAdd);
			host.commitUpdate(recorder);
		}

		return host;
	}
}

function readIntoSourceFile(host: Tree, modulePath: string): ts.SourceFile {
	const text = host.read(modulePath);
	if (text === null) {
		throw new SchematicsException(`File ${modulePath} does not exist.`);
	}
	const sourceText = text.toString('utf-8');

	return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}

function addToNgModule(sourceDir: string): Rule {
	return (host: Tree) => {
		let source;
		let modulePath = normalize(findModule(host, sourceDir + '/shared', LAYER_EXT)) as string;

		if (host.read(modulePath)) {
			source = readIntoSourceFile(host, modulePath);
		} else {
			let options: ModuleOptions = {
				name: 'app',
				module: 'App',
				layer: ''
			}

			modulePath = findModuleFromOptions(host, options) as string;
			source = readIntoSourceFile(host, modulePath);
		}

		const relativePath = '@kantist/rilke-ui';
		const classifiedName = 'RilkeUIModule';
		const importChanges = addImportToModule(
			source,
			modulePath,
			classifiedName,
			relativePath,
		);

		const importRecorder = host.beginUpdate(modulePath);
		for (const change of importChanges) {
			if (change instanceof InsertChange) {
				importRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(importRecorder);

		// Need to refresh the AST because we overwrote the file in the host.
		const exportSource = readIntoSourceFile(host, modulePath);

		const exportRecorder = host.beginUpdate(modulePath);
		const exportChanges = addExportToModule(
			exportSource,
			modulePath,
			classifiedName,
			relativePath,
		);

		for (const change of exportChanges) {
			if (change instanceof InsertChange) {
				exportRecorder.insertLeft(change.pos, change.toAdd);
			}
		}
		host.commitUpdate(exportRecorder);

		return host;
	};
}

export default function (): Rule {
	return async (host: Tree, context: SchematicContext) => {
		const workspace = await getWorkspace(host);

		const project = workspace.projects.get(workspace.extensions.defaultProject as string);

		if (!project) {
			throw new SchematicsException(`Project does not exist.`);
		}

		const sourceDir = buildDefaultPath(project); // src/app/

		context.addTask(new NodePackageInstallTask());

		const templateSource = apply(url('./files'), [
			noop(),
			applyTemplates({
				...strings
			}),
			move('/src/assets/rilke-ui/'),
		]);

		return chain([
			addStyleToWorkspaceFile(workspace),
			addToNgModule(sourceDir),
			mergeWith(templateSource, MergeStrategy.Overwrite),
			addImportBundleScss()
		]);
	};
}