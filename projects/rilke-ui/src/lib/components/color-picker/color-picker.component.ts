import {
	Component,
	ElementRef,
	EventEmitter,
	HostListener,
	Input,
	OnInit,
	Output,
	ViewChild,
	forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ColorEvent } from 'ngx-color';

@Component({
	selector: 'ril-color-picker',
	templateUrl: './color-picker.component.html',
	styleUrls: ['./color-picker.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ColorPickerComponent),
			multi: true,
		},
	],
})
export class ColorPickerComponent implements OnInit, ControlValueAccessor {
	@ViewChild('picker', { static: true }) pickerElement: ElementRef;
	@Input('value') innerValue: string;

	@Output() colorChanged: EventEmitter<string>;
	showPicker: boolean;

	@Input() backgroundColor: string;
	@Input() width: string;
	@Input() direction: string;
	@Input() showHex: boolean;

	get value() {
		return this.innerValue;
	}

	set value(v) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChange(v);
		}
	}

	onChange = (color: string) => {};
	onTouched = () => {};

	constructor() {
		this.colorChanged = new EventEmitter<string>();
		this.showPicker = false;
		this.backgroundColor = '#353535';
		this.innerValue = '#000000';
		this.showHex = false;
	}

	ngOnInit() {}

	togglePicker() {
		this.showPicker = !this.showPicker;
	}

	handleChange($event: ColorEvent) {
		this.colorChanged.emit($event.color.hex);
		this.value = $event.color.hex;
	}

	writeValue(value: string) {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}
}
