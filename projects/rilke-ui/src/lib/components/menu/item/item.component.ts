import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: '[ril-menu-item], ril-menu-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class MenuItemComponent implements OnInit {
	@Input() hr: boolean;
	@Input() isFunction: boolean;

	constructor() {
		this.hr = false;
	}

	ngOnInit() {}
}
