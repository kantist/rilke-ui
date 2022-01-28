import {
	Component,
	OnInit,
	Input,
	HostListener,
	ViewChild,
} from '@angular/core';

import { MatMenuTrigger } from '@angular/material/menu';

type MenuPositionX = 'before' | 'after';

@Component({
	selector: 'ril-menu',
	templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
	@Input() xPosition: MenuPositionX;
	@Input() menuClass: string;
	@Input() hasBackdrop: boolean;

	@ViewChild(MatMenuTrigger) menuTrigger: MatMenuTrigger;

	@HostListener('click', ['$event'])
	toggleSelect() {
		this.menuTrigger.toggleMenu();
	}

	constructor() {
		this.xPosition = 'after';
		this.menuClass = '';
		this.hasBackdrop = true;
	}

	ngOnInit() {}
}
