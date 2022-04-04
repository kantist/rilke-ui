import {
	Component,
	forwardRef,
	HostBinding,
	HostListener,
	Inject,
	Input,
	OnInit,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { RIL_LANGUAGE } from '../../common';
import { IFile, RilFile } from '../../interfaces/file';

@Component({
	selector: 'ril-file-drop',
	templateUrl: 'file-drop.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => FileDropComponent),
			multi: true,
		},
	],
})
export class FileDropComponent implements ControlValueAccessor, OnInit {
	@HostBinding('class.ril-file-upload') rilFileUpload: boolean;
	@Input() multiple: boolean;
	@Input() required: boolean;
	@HostBinding('class.input-readonly') @Input() readonly: boolean;
	@HostBinding('class.input-disabled') @Input() disabled: boolean;

	@HostBinding('class.has-value') @Input('value') innerValue: IFile[];
	fileOver: boolean;
  
	// Dragover listener
	@HostListener('dragover', ['$event']) onDragOver(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		this.fileOver = true;
	}
  
	// Dragleave listener
	@HostListener('dragleave', ['$event']) public onDragLeave(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		this.fileOver = false;
	}
  
	// Drop listener
	@HostListener('drop', ['$event']) public ondrop(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		this.fileOver = false;
		let files = evt.dataTransfer.files;
		if (files.length > 0) {
			this.fileReader(files);
		}
	}

	onChange: any = () => {};
	onTouched: any = () => {};

	constructor(
		@Inject(RIL_LANGUAGE) public lang
	) {
		this.rilFileUpload = true;
		this.readonly = false;
		this.disabled = false;
		this.multiple = true;
		this.required = false;
		this.innerValue = null;
	}

	get value() {
		return this.innerValue;
	}

	set value(v) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChange(v);
		}
	}

	ngOnInit() {
		setInterval(() => {
			this.value = this.value?.filter((v) => v != null);
		}, 100);
	}

	registerOnChange(fn) {
		this.onChange = fn;
	}

	registerOnTouched(fn) {
		this.onTouched = fn;
	}

	writeValue(value: IFile[]) {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	onFileChanged(inputValue: any) {
		const files: File[] = inputValue.target.files;

		this.fileReader(files);
	}

	fileReader(files: File[]) {
		if (!this.value) {
			this.value = [];
		}

		for (let file of files) {
			let reader: FileReader = new FileReader();

			reader.onloadend = () => {
				if (!this.multiple)
					this.value = [];

				this.value.push(
					new RilFile({
						name: file.name,
						base64: reader.result,
						file: file,
					})
				);
			};

			reader.readAsDataURL(file);
		}
	}
}
