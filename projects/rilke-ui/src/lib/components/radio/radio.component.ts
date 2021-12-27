import {
	AfterContentInit,
	ChangeDetectorRef,
	Component,
	ContentChildren,
	EventEmitter,
	forwardRef,
	HostBinding,
	Input,
	Output,
	QueryList,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioOptionComponent } from './radio-option/radio-option.component';

@Component({
	selector: 'ril-radio',
	templateUrl: './radio.component.html',
	styleUrls: ['./radio.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => RadioComponent),
			multi: true,
		},
	],
})
export class RadioComponent implements AfterContentInit, ControlValueAccessor {
	@Input() direction: string;
	@Input() value: string;
	@Output() change: EventEmitter<string>;
	@HostBinding('class.ril-radio') true;
	@HostBinding('class.ril-radio-horizontal') get getDirection() {
		return this.direction === 'horizontal';
	}

	// get option component
	@ContentChildren(RadioOptionComponent)
	radioOptions: QueryList<RadioOptionComponent>;

	onChange: any = () => {};
	onTouched: any = () => {};

	constructor(private cdRef: ChangeDetectorRef) {
		this.change = new EventEmitter<string>();
	}

	ngAfterContentInit() {
		this.setCheckedOption(this.value, true);
		this.cdRef.detectChanges();
	}

	setCheckedOption(value: string, subscribe: boolean) {
		if (this.radioOptions && this.radioOptions.length) {
			this.radioOptions.forEach((option) => {
				option.checked = option._value === value ? true : false;

				if (subscribe) {
					option.changeValue.subscribe((newValue) => {
						this.writeValue(newValue);
						this.change.emit(newValue);
						this.onChange(newValue);

						this.radioOptions.forEach((option) => {
							option.checked =
								option._value === newValue ? true : false;
							option.changeAttr(option._value === newValue);
						});
					});
				}
			});
		}
	}

	writeValue(value) {
		if (!value || typeof value !== 'string') {
			return;
		}
		this.value = value;
	}

	registerOnChange(fn) {
		this.onChange = fn;
	}

	registerOnTouched(fn) {
		this.onTouched = fn;
	}
}
