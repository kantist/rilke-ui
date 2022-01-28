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
import { addExportToModule, addImportToModule } from '../utility/ast-utils';
import * as ts from '../third_party/files/typescript';
import { InsertChange } from '../utility/change';
import { findModule, LAYER_EXT } from '../utility/find-module';
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
				"src/assets/rilke-ui/_colors.scss",
				"src/assets/rilke-ui/_structure.scss",
				"src/assets/rilke-ui/_typography.scss",
				"src/assets/rilke-ui/components.scss",
				"src/assets/rilke-ui/styles.scss"
			];

			styles.forEach((s) => {
				if (!optionsJson['styles'][s]) {
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
		const modulePath = normalize(findModule(host, sourceDir + '/shared', LAYER_EXT));
		const source = readIntoSourceFile(host, modulePath);

		const relativePath = '@kantist/rilke-ui';
		const classifiedName = 'RilkeUiModule';
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
			mergeWith(templateSource, MergeStrategy.Overwrite)
		]);
	};
}