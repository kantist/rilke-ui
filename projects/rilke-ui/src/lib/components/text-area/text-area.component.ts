import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter,
	forwardRef,
	HostBinding,
	ElementRef,
	HostListener,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { state } from '../../interfaces/general';
import { ITextareaLimiter } from '../../interfaces/textarea';

@Component({
	selector: 'ril-text-area',
	templateUrl: './text-area.component.html',
	styleUrls: ['./text-area.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => TextAreaComponent),
			multi: true,
		},
	],
})
export class TextAreaComponent implements ControlValueAccessor, OnInit {
	@HostBinding('class.ril-textarea') true;
	@HostBinding('class.textarea-focus') get focused() {
		return this.textareaFocus;
	}
	@HostBinding('class.textarea-disabled') @Input() disabled: boolean;
	@HostBinding('class.textarea-not-resize') get getResize() {
		return !this.resize || this.autoGrow;
	}
	@HostBinding('class.textarea-readonly') @Input() readonly: boolean;
	@HostBinding('style.height') get controlHeight() {
		const HEIGHT = this.height;

		return typeof HEIGHT === 'number' ? `${HEIGHT}px` : HEIGHT;
	}

	@HostBinding('class.textarea-nostyle') @Input() noStyle: boolean;

	@Input() name: string;
	@Input() placeholder: string;
	@Input() charLimiter: number | ITextareaLimiter;
	@Input() required: boolean;
	@Input('value') innerValue: string;
	@Input() bgColor: string | string[];
	@Input() borderColor: string | string[];
	@Input() color: string | string[];
	@Input('autoGrow') autoGrowArea: boolean;
	@Input() resize: boolean;
	@Input() height: number | string;
	@Input() rows: number;

	@HostListener('input')
	onInput(): void {
		this.autoGrowArea ? this.adjust() : null;
	}

	@Output() focus: EventEmitter<boolean>;

	textareaFocus: boolean;
	limiter: ITextareaLimiter;
	currentBgColor: string;
	currentBorderColor: string;
	currentColor: string;
	states: any;
	onChange: any = () => {};
	onTouched: any = () => {};

	constructor(private element: ElementRef) {
		this.name = '';
		this.textareaFocus = false;
		this.readonly = false;
		this.disabled = false;
		this.required = false;
		this.innerValue = '';
		this.states = state;
		this.autoGrowArea = false;
		this.resize = false;
		this.limiter = {
			counter: null,
			before: '',
			after: '',
		};

		this.focus = new EventEmitter<boolean>();
	}

	ngOnInit() {
		this.setStyles(
			!this.disabled ? this.states.default : this.states.disabled
		);
		this.charLimiter ? this.setLimiter(this.charLimiter, this.value) : null;
	}

	setLimiter(limiter: number | ITextareaLimiter, value: string) {
		const VAL_LENGHT = value.length ? value.length : 0;

		if (limiter instanceof Object) {
			this.limiter = {
				counter: limiter['counter'] - VAL_LENGHT,
				before: limiter['before'],
				after: limiter['after'],
			};
		} else {
			this.limiter.counter = limiter - VAL_LENGHT;
		}
	}

	get value() {
		return this.innerValue;
	}

	set value(v) {
		if (v !== this.innerValue) {
			this.innerValue = v;
			this.onChange(v);
		}

		if (this.charLimiter) {
			this.limiter.counter =
				(this.charLimiter instanceof Object
					? this.charLimiter['counter']
					: this.charLimiter) - this.innerValue.length;
		}
	}

	get autoGrow() {
		return this.autoGrowArea;
	}

	set autoGrow(v) {
		console.log(v);
		if (v !== this.autoGrowArea) {
			this.autoGrowArea = v;

			if (this.autoGrowArea) {
				this.adjust();
			} else {
				this.deAdjust();
			}
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

	onFocus(disabled: boolean) {
		if (!this.textareaFocus && !disabled) {
			this.element.nativeElement
				.querySelector('.textarea-control')
				.focus();
			this.textareaFocus = true;

			this.focus.emit(true);
			this.setStyles(this.states.focus);
		}
	}

	onBlur(disabled: boolean) {
		this.textareaFocus = false;
		this.focus.emit(false);

		!disabled ? this.setStyles(this.states.default) : null;
	}

	@HostListener('mouseenter') onMouseEnter() {
		!this.textareaFocus && !this.disabled && !this.readonly
			? this.setStyles(this.states.hover)
			: null;
	}
	@HostListener('mouseleave') onMouseLeave() {
		!this.textareaFocus && !this.disabled && !this.readonly
			? this.setStyles(this.states.default)
			: null;
	}

	setStyles(
		st: state,
		bg: string | string[] = this.bgColor,
		border: string | string[] = this.borderColor,
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
		this.currentBorderColor =
			border instanceof Array ? border[styleIndex] : border;
		this.currentColor = color instanceof Array ? color[styleIndex] : color;
	}

	getStyles() {
		return {
			'background-color': this.currentBgColor,
			'border-color': this.currentBorderColor,
			color: this.currentColor,
		};
	}

	adjust(): void {
		setTimeout(() => {
			let el = this.element.nativeElement.querySelector('textarea');

			if (el) {
				el.style.overflow = 'hidden';
				el.style.height = 'auto';
				el.style.height = `${el.scrollHeight + 2}px`;
			}
		});
	}

	deAdjust(): void {
		setTimeout(() => {
			let el = this.element.nativeElement.querySelector('textarea');

			if (el) {
				el.style.overflow = 'auto';
				el.style.height = '100%';
			}
		});
	}
}
