import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'ril-card',
	templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
	@HostBinding('class.ril-card') true = true;

	constructor() {}

	ngOnInit(): void {}
}
