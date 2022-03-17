export interface IFile {
	name: string;
	base64: string | ArrayBuffer;
	file: File;
}

export class RilFile implements IFile {
	name: string;
	base64: string | ArrayBuffer;
	file: File;

	constructor(
		file: IFile
	) {
		if (file) {
			this.name = file.name;
			this.base64 = file.base64;
			this.file = file.file;
		}
	}
}
