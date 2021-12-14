import { Component, AfterContentInit, Inject, Input, Output, ElementRef } from '@angular/core';

type MatAccordionTogglePosition = 'before' | 'after';

@Component({
	selector: 'ka-option',
	templateUrl: './option.component.html',
	styleUrls: ['./option.component.scss']
})
export class KAOptionComponent implements AfterContentInit {
	@Input() value: any;
	@Input() content: any;

	constructor(
		@Inject(ElementRef) private element: ElementRef
	) {
		this.value = '';
	}

	ngAfterContentInit() {
		this.content = this.element.nativeElement.innerHTML;
	}
}
