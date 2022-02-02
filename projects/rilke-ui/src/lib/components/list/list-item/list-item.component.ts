import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListComponent } from '../list.component';

@Component({
	selector: 'ril-list-item',
	templateUrl: './list-item.component.html',
})
export class ListItemComponent implements OnInit, OnDestroy {
	@Input() checkbox: boolean;
	@Input() itemIndex: number;

	listCheck = new FormControl(false);

	constructor(
		@Inject(ListComponent) public list: ListComponent
	) {
		this.list.listToolbar.allSelected.subscribe((res) => {
			if (res) {
				this.listCheck.setValue(true);
			} else {
				this.listCheck.setValue(false);
			}
		});
	}

	ngOnInit() {
		this.listCheck.valueChanges.subscribe((res) => {
			if (res == true) {
				this.list.listToolbar.addToSelectedList(this.itemIndex, res);
			} else {
				this.list.listToolbar.removeFromSelectedlist(this.itemIndex);
			}
		});
	}

	onClear(): void {}

	ngOnDestroy() {}
}
