import {
	Component,
	HostBinding,
	OnInit,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
} from '@angular/core';
import { DatePickerComponent } from '../datepicker/datepicker.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { TextAreaComponent } from '../text-area/text-area.component';

@Component({
	selector: 'ril-form-group',
	templateUrl: './form-group.component.html',
})
export class FormGroupComponent implements OnInit, AfterContentInit {
	@HostBinding('class.ril-form-group') true: boolean = true;
	@HostBinding('class.float') @Input() float: boolean = true;
	@HostBinding('class.has-value') hasValue: boolean;
	@HostBinding('class.input-focus') inputFocus: boolean;

	@ContentChildren(InputComponent)
	inputRef: QueryList<InputComponent>;

	@ContentChildren(SelectComponent)
	selectRef: QueryList<SelectComponent>;

	@ContentChildren(TextAreaComponent)
	textareaRef: QueryList<TextAreaComponent>;

	@ContentChildren(DatePickerComponent)
	datepickerRef: QueryList<DatePickerComponent>;

	constructor() {}

	ngOnInit() {}

	ngAfterContentInit() {
		this.inputRef.toArray().forEach((input, index) => {
			input.focus.subscribe((i) => {
				this.inputFocus = input.inputFocus;
				this.hasValue = input.innerValue ? true : false;
			});
			input.blur.subscribe((i) => {
				this.inputFocus = input.inputFocus;
				this.hasValue = input.innerValue ? true : false;
			});
		});

		this.selectRef.toArray().forEach((input, index) => {
			input.selectionChange.subscribe((i) => {
				this.hasValue = input.innerValue ? true : false;
			});
		});

		this.textareaRef.toArray().forEach((input, index) => {
			input.focus.subscribe((i) => {
				this.inputFocus = input.textareaFocus;
				this.hasValue = input.innerValue ? true : false;
			});
		});

		this.datepickerRef.toArray().forEach((input, index) => {
			input.focus.subscribe((i) => {
				this.inputFocus = input.inputFocus;
				this.hasValue = input.innerValue ? true : false;
			});
			input.blur.subscribe((i) => {
				this.inputFocus = input.inputFocus;
				this.hasValue = input.innerValue ? true : false;
			});
		});
	}
}
