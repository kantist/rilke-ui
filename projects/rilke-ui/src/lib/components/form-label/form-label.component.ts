import { Component, HostBinding, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ka-form-label',
	templateUrl: './form-label.component.html',
	styleUrls: ['./form-label.component.scss']
})
export class KAFormLabelComponent implements OnInit {
	@HostBinding('class.ka-form-label') true;

	constructor() { }

	ngOnInit() { }
}
