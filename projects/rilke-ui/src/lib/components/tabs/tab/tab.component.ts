import { Component, Input, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'ril-tab',
	templateUrl: './tab.component.html',
})
export class TabComponent implements OnInit {
	@HostBinding('class.tab-panel') tab = true;
	@HostBinding('class.fade') fade = true;
	@HostBinding('class.active') @Input() active: boolean = false;

	@HostBinding('class.show') get show() {
		return this.active;
	}

	@Input('title') title: string;
	@Input('rounded') rounded: boolean;
	@Input('icon') icon: string;
	@Input('link') link: string;
	@Input('fullMatch') fullMatch: boolean = false;

	ngOnInit() {
		if (this.fullMatch && window.location.pathname == this.link) {
			this.active = true;
		} else if (
			!this.fullMatch &&
			window.location.pathname.startsWith(this.link)
		) {
			this.active = true;
		}
	}
}
