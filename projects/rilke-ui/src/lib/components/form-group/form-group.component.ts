import {
	Component,
	HostBinding,
	OnInit,
	Input,
	ViewChildren,
	AfterViewInit,
	ContentChildren,
	QueryList,
	ViewContainerRef,
	ContentChild,
	ComponentRef,
	AfterContentInit,
} from '@angular/core';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';

@Component({
	selector: 'ril-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
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
				console.log('change detected', i);
				this.hasValue = input.innerValue ? true : false;
			});
		});
	}
}
