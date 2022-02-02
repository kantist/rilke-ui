import {
	Component,
	OnInit,
	Input,
	forwardRef,
	HostBinding,
	ElementRef,
	HostListener,
	Output,
	EventEmitter,
	ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { BreakpointObserver } from '@angular/cdk/layout';

import { IInputProperties } from '../../interfaces/input';
import { state } from '../../interfaces/general';

const PROPERTIES_NAMES: string[] = [
	'prefix',
	'suffix',
	'prefixIcon',
	'suffixIcon',
	'placeholder',
];

@Component({
	selector: 'ril-date-picker',
	templateUrl: './datepicker.component.html',
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => DatePickerComponent),
			multi: true,
		},
	],
})
export class DatePickerComponent implements ControlValueAccessor, OnInit {
	@ViewChild('picker') picker;

	@HostBinding('class.ril-date-picker') true = true;

	@HostBinding('class.input-sm') get smSize() {
		return this.size === 'sm';
	}
	@HostBinding('class.input-lg') get lgSize() {
		return this.size === 'lg';
	}

	@HostBinding('class.input-focus') get focused() {
		return this.inputFocus;
	}
	@HostBinding('class.input-disabled') @Input() disabled: boolean;
	@HostBinding('class.input-readonly') @Input() readonly: boolean;

	@Input() type: string;
	@Input() name: string;
	@Input() placeholder: string;
	@Input() prefix: string | string[];
	@Input() suffix: string | string[];
	@Input() prefixIcon: string | string[];
	@Input() suffixIcon: string | string[];
	@Input() size: string;
	@Input() required: boolean;
	@Input() autoSize: boolean;
	@HostBinding('class.has-value') @Input('value') innerValue: string;
	@Input() bgColor: string | string[];
	@Input() color: string | string[];
	@Input() autoOpen: boolean;

	@Output() focus: EventEmitter<void>;
	@Output() blur: EventEmitter<void>;
	@Output() valueChange: EventEmitter<string>;

	inputFocus: boolean;
	properties: IInputProperties;

	currentBgColor: string;
	currentColor: string;

	states: any;
	onChange: any = () => {};
	onTouched: any = () => {};

	get touchUi() {
		return this.breakpointObserver.isMatched('(max-width: 767px)');
	}

	constructor(
		public element: ElementRef,
		private breakpointObserver: BreakpointObserver
	) {
		this.placeholder = '';
		this.type = 'text';
		this.name = '';
		this.size = 'md';

		this.inputFocus = false;
		this.readonly = false;
		this.disabled = false;
		this.required = false;
		this.autoSize = false;
		this.innerValue = '';
		this.properties = {
			prefixValue: '',
			prefixColor: '',
			suffixValue: '',
			suffixColor: '',
			prefixIconValue: '',
			prefixIconColor: '',
			suffixIconValue: '',
			suffixIconColor: '',
		};
		this.states = state;
		this.blur = new EventEmitter<void>();
		this.focus = new EventEmitter<void>();
		this.valueChange = new EventEmitter<string>();
		this.suffixIcon = 'icofont-ui-calendar';
		this.autoOpen = true;
	}

	open() {
		this.picker.open();
		this.onFocus(this.disabled);
	}

	close() {
		this.picker.close();
		this.onBlur(this.disabled);
	}

	ngOnInit() {
		if (this.autoSize) {
			setTimeout(() => {
				this.resizable(
					this.element.nativeElement.querySelector('.input-control')
				);
			}, 0);
		}

		PROPERTIES_NAMES.forEach((property) => {
			const PROPERTY = this[property];

			this.properties[`${property}Value`] =
				PROPERTY instanceof Array ? PROPERTY[0] : PROPERTY;
			this.properties[`${property}Color`] =
				PROPERTY instanceof Array ? PROPERTY[1] : null;
		});

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
			this.valueChange.emit(v);
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

	onFocus(disabled: boolean) {
		if (!this.inputFocus && !disabled) {
			this.element.nativeElement.querySelector('.input-control').focus();
			this.inputFocus = true;
			this.focus.emit();
			this.setStyles(this.states.focus);
		}
	}

	onBlur(disabled: boolean) {
		console.log('worked');
		this.inputFocus = false;
		if (!disabled) {
			this.blur.emit();
			this.onTouched();
			this.setStyles(this.states.default);
		}
	}

	@HostListener('mouseenter') onMouseEnter() {
		!this.inputFocus && !this.disabled && !this.readonly
			? this.setStyles(this.states.hover)
			: null;
	}
	@HostListener('mouseleave') onMouseLeave() {
		!this.inputFocus && !this.disabled && !this.readonly
			? this.setStyles(this.states.default)
			: null;
	}

	resizable(el: any, factor?: number) {
		const INT: number = Number(factor) || 7.7;
		function resize() {
			el.parentElement.style.maxWidth = el.value.length * INT + 4 + 'px';
		}
		const e = 'keyup, keypress, focus, blur, change'.split(',');
		for (let i = 0; i < e.length; i++) {
			el.addEventListener(e[i], resize, false);
		}
		resize();
	}

	setStyles(
		st: state,
		bg: string | string[] = this.bgColor,
		color: string | string[] = this.color
	) {
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

		this.currentBgColor = bg instanceof Array ? bg[styleIndex] : bg;
		this.currentColor = color instanceof Array ? color[styleIndex] : color;
	}

	getStyles() {
		return {
			'background-color': this.currentBgColor,
			color: this.currentColor,
		};
	}
}
