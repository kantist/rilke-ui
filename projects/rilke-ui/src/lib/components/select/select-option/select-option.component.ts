import {
	Component,
	AfterContentInit,
	Inject,
	Input,
	ElementRef,
} from '@angular/core';

type MatAccordionTogglePosition = 'before' | 'after';

@Component({
	selector: 'ril-select-option',
	templateUrl: './select-option.component.html',
})
export class SelectOptionComponent implements AfterContentInit {
	@Input() value: any;
	@Input() content: any;

	constructor(@Inject(ElementRef) private element: ElementRef) {
		this.value = '';
	}

	ngAfterContentInit() {
		this.content = this.element.nativeElement.innerHTML;
	}
}
