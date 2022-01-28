import {
	Component,
	EventEmitter,
	HostBinding,
	Input,
	OnInit,
	Output,
} from '@angular/core';

@Component({
	selector: 'ril-file-upload',
	templateUrl: 'file-upload.component.html',
})
export class FileUploadComponent implements OnInit {
	@HostBinding('class.ril-file-upload') true: boolean = true;
	@Output() fileResult: EventEmitter<any>;
	@Input('value')
	set model(value: string) {
		this.cancelFile();
	}

	file: any;
	isImage: boolean;

	constructor() {
		this.fileResult = new EventEmitter<any>();
		this.isImage = false;
	}

	ngOnInit() {}

	onFileChanged(inputValue: any) {
		this.file = null;
		this.isImage = false;

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
				console.log(file);
				if (
					['image/jpg', 'image/png', 'image/jpeg'].includes(file.type)
				) {
					this.isImage = true;
					console.log('image');
				} else {
					console.log('not image');
				}
			};

			reader.readAsDataURL(file);
		}
	}
	cancelFile() {
		this.file = null;
		this.isImage = false;
		this.fileResult.emit(this.file);
	}
}
