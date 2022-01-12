import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ListComponent } from './../list.component';

@Component({
	selector: 'ril-list-header',
	templateUrl: './list-header.component.html',
	styleUrls: ['./list-header.component.scss'],
})
export class ListHeaderComponent implements OnInit {
	listCheck = new FormControl(false);

	constructor(@Inject(ListComponent) public list: ListComponent) {}

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
