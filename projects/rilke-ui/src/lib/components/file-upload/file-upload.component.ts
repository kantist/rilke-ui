import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'ka-file-upload',
	templateUrl: 'file-upload.component.html',
	styleUrls: ['file-upload.component.scss'],
})
export class KAFileUploadComponent implements OnInit {
	@Output() fileResult: EventEmitter<any>;
	@Input('value')
	set model(value: string) {
		this.cancelFile();
	}

	file: any;

	constructor() {
		this.fileResult = new EventEmitter<any>();
	}

	ngOnInit() {}

	onFileChanged(inputValue: any) {
		let files: File[] = inputValue.target.files;
		for (let file of files) {
			let reader: FileReader = new FileReader();

			reader.onloadend = () => {
				let obj = {
					name: file.name,
					base64: reader.result,
					file: file,
				};
				this.file = obj;
				this.fileResult.emit(obj);
			};

			reader.readAsDataURL(file);
		}
	}
	cancelFile() {
		this.file = null;

		this.fileResult.emit(this.file);
	}
}
