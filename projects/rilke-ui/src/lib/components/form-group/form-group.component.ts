import { Component, HostBinding, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ril-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
	@HostBinding('class.ril-form-group') true: boolean = true;
	@HostBinding('class.float') @Input() float: boolean = true;

	constructor() {}

	ngOnInit() {}
}
