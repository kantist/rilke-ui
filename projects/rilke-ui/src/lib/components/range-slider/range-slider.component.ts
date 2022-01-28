import {
	Component,
	OnInit,
	Input,
	forwardRef,
	HostBinding,
	ElementRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { state } from '../../interfaces/general';

@Component({
	selector: 'ril-range-slider',
	templateUrl: './range-slider.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RangeSliderComponent),
			multi: true,
		},
	],
})
export class RangeSliderComponent implements ControlValueAccessor, OnInit {
	@HostBinding('class.ril-slider') simpleSlider: boolean;
	@Input() disabled: boolean;
	@Input() readonly: boolean;
	@Input() type: string;
	@Input() name: string;
	@Input() placeholder: string;
	@Input() required: boolean;
	@HostBinding('class.has-value') @Input('value') innerValue: any;

	@Input()
	states: any;
	onChange: any = () => {};
	onTouched: any = () => {};

	@Input() invert: boolean;
	@Input() max: number;
	@Input() min: number;
	@Input() showTicks: boolean;
	@Input() step: number;
	@Input() label: boolean;
	@Input() vertical: boolean;
	@Input() tickInterval: number;

	constructor(public element: ElementRef) {
		this.simpleSlider = true;
		this.type = 'text';
		this.name = '';
		this.readonly = false;
		this.disabled = false;
		this.required = false;
		this.innerValue = '';
		this.states = state;

		this.invert = false;
		this.max = 100;
		this.min = 0;
		this.showTicks = true;
		this.step = 1;
		this.label = false;
		this.vertical = false;
		this.tickInterval = 1;
	}

	ngOnInit() {
		this.setStyles(
			!this.disabled ? this.states.default : this.states.disabled
		);
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

	registerOnChange(fn) {
		this.onChange = fn;
	}

	registerOnTouched(fn) {
		this.onTouched = fn;
	}

	writeValue(value: string) {
		if (value !== this.innerValue) {
			this.innerValue = value;
		}
	}

	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	setStyles(st: state) {
		let styleIndex: number = 0;

		switch (st) {
			case this.states.hover:
				styleIndex = 1;
				break;
			case this.states.focus:
				styleIndex = 2;
				break;
			case this.states.disabled:
				styleIndex = 3;
				break;
			default:
				styleIndex = 0;
		}
	}
}
