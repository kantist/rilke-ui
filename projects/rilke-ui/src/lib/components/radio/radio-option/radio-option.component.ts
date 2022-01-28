import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	HostBinding,
	Input,
	ViewChild,
	ElementRef,
	HostListener,
	Renderer2,
	Output,
	EventEmitter,
} from '@angular/core';
import { state } from '../../../interfaces/general';

@Component({
	selector: 'ril-radio-option',
	templateUrl: './radio-option.component.html',
})
export class RadioOptionComponent implements AfterViewInit {
	@HostBinding('class.ril-radio-option') true;
	@HostBinding('class.disabled') @Input() disabled: boolean;
	@HostBinding('class.checked') checked: boolean;
	@ViewChild('radioLabel', { static: true }) radioLabel;
	@Input() name: string;
	@Input() label: string;
	@Input('value') _value: string;
	@Input() bgColor: string | string[];
	@Input() borderColor: string | string[];
	@Input() color: string | string[];
	@Input() labelColor: string | string[];
	@Output() changeValue: EventEmitter<string>;
	currentBgColor: string;
	currentBorderColor: string;
	currentColor: string;
	currentLabelColor: string;
	states: any;

	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef,
		private cdRef: ChangeDetectorRef
	) {
		this.label = '';
		this.name = '';
		this.checked = false;
		this.disabled = false;
		this.states = state;
		this.changeValue = new EventEmitter<string>();
	}

	ngAfterViewInit() {
		this.cdRef.detectChanges();
		this.setStyles(
			this.disabled
				? this.states.disabled
				: this.checked
				? this.states.focus
				: this.states.default
		);
	}

	switch(value: string) {
		if (!this.disabled && !this.checked) {
			this.changeValue.emit(value);
		}
	}

	changeAttr(checked: boolean) {
		this.renderer.setProperty(this.elementRef, 'checked', checked);
		this.setStyles(
			this.states[
				this.disabled ? 'disabled' : checked ? 'focus' : 'default'
			]
		);
	}

	@HostListener('mouseenter') onMouseEnter() {
		if (!this.disabled) {
			this.setStyles(this.states[this.checked ? 'focus' : 'hover']);
		}
	}
	@HostListener('mouseleave') onMouseLeave() {
		if (!this.disabled) {
			this.setStyles(this.states[this.checked ? 'focus' : 'default']);
		}
	}

	setStyles(
		st: state,
		bg: string | string[] = this.bgColor,
		border: string | string[] = this.borderColor,
		color: string | string[] = this.color,
		labelColor: string | string[] = this.labelColor
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
		this.currentLabelColor =
			labelColor instanceof Array ? labelColor[styleIndex] : labelColor;
	}

	getStyles() {
		return {
			'background-color': this.currentBgColor,
			'border-color': this.currentBorderColor,
		};
	}
	getMarkerColor() {
		return {
			'background-color': this.currentColor,
		};
	}
	getLabelColor() {
		return {
			color: this.currentLabelColor,
		};
	}
}
