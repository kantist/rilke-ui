import {
	Component,
	ElementRef,
	HostBinding,
	OnInit,
	Input,
	ContentChildren,
	QueryList,
	AfterContentInit,
} from '@angular/core';
import { DatePickerComponent } from '../datepicker/datepicker.component';
import { InputComponent } from '../input/input.component';
import { RichTextComponent } from '../rich-text/rich-text.component';
import { SelectComponent } from '../select/select.component';
import { TextAreaComponent } from '../text-area/text-area.component';

@Component({
	selector: 'ril-form-group',
	templateUrl: './form-group.component.html',
})
export class FormGroupComponent implements OnInit, AfterContentInit {
	@HostBinding('class.ril-form-group') true = true;
	@HostBinding('class.float') @Input() float = true;
	@HostBinding('class.has-value') hasValue: boolean;
	@HostBinding('class.input-focus') inputFocus: boolean;
	@HostBinding('class.text-area') textarea: boolean;
	@HostBinding('class.rich-text') richtext: boolean;

	@ContentChildren(InputComponent)
	inputRef: QueryList<InputComponent>;

	@ContentChildren(SelectComponent)
	selectRef: QueryList<SelectComponent>;

	@ContentChildren(TextAreaComponent)
	textareaRef: QueryList<TextAreaComponent>;

	@ContentChildren(RichTextComponent)
	richTextRef: QueryList<RichTextComponent>;

	@ContentChildren(DatePickerComponent)
	datepickerRef: QueryList<DatePickerComponent>;

	constructor(private element: ElementRef) {}

	ngOnInit() {}

	ngAfterContentInit() {
		this.inputRef.toArray().forEach((input, index) => {
			this.inputFocus = input.inputFocus;
			this.hasValue = input.innerValue ? true : false;

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
			this.hasValue = input.innerValue ? true : false;

			input.selectionChange.subscribe((i) => {
				this.hasValue = input.innerValue ? true : false;
			});
		});

		this.textareaRef.toArray().forEach((input, index) => {
			this.textarea = true;
			this.inputFocus = input.textareaFocus;
			this.hasValue = input.innerValue ? true : false;

			input.focus.subscribe((i) => {
				this.inputFocus = input.textareaFocus;
				this.hasValue = input.innerValue ? true : false;
			});
		});

		this.richTextRef.toArray().forEach((input, index) => {
			this.richtext = true;
			this.inputFocus = input.focused;
			this.hasValue = input.innerValue ? true : false;

			input.focus.subscribe((i) => {
				this.inputFocus = input.richtextFocus;
				this.hasValue = input.innerValue ? true : false;
			});
			input.blur.subscribe((i) => {
				this.inputFocus = input.richtextFocus;
				this.hasValue = input.innerValue ? true : false;
			});
			setTimeout(() => {
				input.editorToolbar.height.subscribe((height) => {
					if (!this.inputFocus && !this.hasValue) {
						this.element.nativeElement.getElementsByTagName('ril-form-label')[0].style.setProperty('top', (height + 18)+'px', 'important');
					} else {
						this.element.nativeElement.getElementsByTagName('ril-form-label')[0].style.setProperty('top', '-0.5em');
					}
				});
			})
		});

		this.datepickerRef.toArray().forEach((input, index) => {
			this.inputFocus = input.inputFocus;
			this.hasValue = input.innerValue ? true : false;

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
