import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { KAListComponent } from './../list.component';

@Component({
	selector: 'ka-list-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class KAListHeaderComponent implements OnInit {
	listCheck = new FormControl(false);

	constructor(
		@Inject(KAListComponent) public list: KAListComponent
	) {}

	unchecking: boolean;

	checkbox: boolean;
	itemOption: boolean;

	ngOnInit() {
		this.checkbox = this.list.checkbox;
		this.itemOption = this.list.itemOption;

		this.list.clearForm.subscribe((val) => {
			if (val) {
				this.onClear();
			}
		});

		this.onChanges();
	}

	// Get checkbox changed
	onChanges(): void {
		this.listCheck.valueChanges.subscribe((val) => {
			this.list.emitSetAll(val);
		});
	}

	onClear(): void {
		this.listCheck.setValue(false);
	}
}
