import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'ril-card-image',
	templateUrl: './card-image.component.html',
})
export class CardImageComponent implements OnInit {
	@Input() src: string;

	constructor() {}

	ngOnInit(): void {}
}
