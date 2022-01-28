import { Component, HostBinding, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ril-form-label',
	templateUrl: './form-label.component.html',
})
export class FormLabelComponent implements OnInit {
	@HostBinding('class.ril-form-label') true: boolean = true;

	constructor() {}

	ngOnInit() {}
}
