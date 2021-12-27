import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'ril-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
	@HostBinding('class.ril-card') true = true;

	constructor() {}

	ngOnInit(): void {}
}
