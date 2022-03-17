import {
	Component,
	forwardRef,
	HostBinding,
	Inject,
	Input,
	OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RIL_LANGUAGE } from '../../common';
import { IFile, RilFile } from '../../interfaces/file';

@Component({
	selector: 'ril-file-upload',
	templateUrl: 'file-upload.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FileUploadComponent),
			multi: true,
		},
	],
})
export class FileUploadComponent implements ControlValueAccessor, OnInit {
	@HostBinding('class.ril-file-upload') rilFileUpload: boolean;
	@Input() required: boolean;
	@HostBinding('class.input-readonly') @Input() readonly: boolean;
	@HostBinding('class.input-disabled') @Input() disabled: boolean;

	@HostBinding('class.has-value') @Input('value') innerValue: IFile;

	isImage: boolean;

	onChange: any = () => {};
	onTouched: any = () => {};

	constructor(
		@Inject(RIL_LANGUAGE) public lang
	) {
		this.rilFileUpload = true;
		this.readonly = false;
		this.disabled = false;
		this.required = false;
		this.innerValue = null;

		this.isImage = false;
	}

	get value() {
		return this.innerValue;
	}

	set value(v) {
		if (v !== this.innerValue) {
			this.innerValue = new RilFile(v);
			this.onChange(v);

			if (this.value?.file) {
				if (['image/jpg', 'image/png', 'image/jpeg'].includes(this.value.file.type)) {
					this.isImage = true;
				}
			}
		}
	}

	ngOnInit() {
		if (this.value) {
			if (['image/jpg', 'image/png', 'image/jpeg'].includes(this.value.file.type)) {
				this.isImage = true;
			}
		}
	}

	registerOnChange(fn) {
		this.onChange = fn;
	}

	registerOnTouched(fn) {
		this.onTouched = fn;
	}

	writeValue(value: IFile) {
		if (value !== this.innerValue) {
			this.innerValue = new RilFile(value);

			if (this.innerValue?.file) {
				if (['image/jpg', 'image/png', 'image/jpeg'].includes(this.innerValue.file.type)) {
					this.isImage = true;
				}
			}
		}
	}

	onFileChanged(inputValue: any) {
		this.value = null;
		this.isImage = false;

		let files: File[] = inputValue.target.files;
		for (let file of files) {
			let reader: FileReader = new FileReader();

			reader.onloadend = () => {
				this.value = new RilFile({
					name: file.name,
					base64: reader.result,
					file: file,
				});
			};

			reader.readAsDataURL(file);
		}
	}

	cancelFile() {
		this.value = null;
		this.isImage = false;
	}
}
