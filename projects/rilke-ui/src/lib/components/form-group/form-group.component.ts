import { Component, HostBinding, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ka-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss']
})
export class KAFormGroupComponent implements OnInit {
	@HostBinding('class.ka-form-group') true;
	@HostBinding('class.float') @Input() float: boolean;

	constructor() { }

	ngOnInit() { }
}
