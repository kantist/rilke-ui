import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListComponent } from '../list.component';

@Component({
	selector: 'ril-list-header',
	templateUrl: './list-header.component.html',
})
export class ListHeaderComponent implements OnInit {
	@Input() checkbox: boolean;

	unchecking: boolean;

	listCheck = new FormControl(false);

	constructor(@Inject(ListComponent) public list: ListComponent) {
		this.list.listToolbar.allSelected.subscribe((res) => {
			if (!res) {
				this.onClear();
			}
		});
	}

	itemOption: boolean;

	ngOnInit() {
		this.listCheck.valueChanges.subscribe((res) => {
			if (!this.unchecking) {
				if (res) {
					this.list.listToolbar.selectAll();
				} else {
					this.list.listToolbar.removeAll();
				}
			}
		});
	}

	onClear(): void {
		this.unchecking = true;
		this.listCheck.setValue(false);
		this.unchecking = false;
	}
}
