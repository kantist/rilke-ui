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

	unchecking: boolean;

	listCheck = new FormControl(false);

	constructor(
		@Inject(ListComponent) public list: ListComponent
	) {
		this.list.listToolbar.allSelected.subscribe((res) => {
			if (res) {
				this.onSelect();
			} else {
				this.onClear();
			}
		});
	}

	ngOnInit() {
		this.listCheck.valueChanges.subscribe((res) => {
			if (!this.unchecking) {
				if (res == true) {
					this.list.listToolbar.addToSelectedList(this.itemIndex, res);
				} else {
					this.list.listToolbar.removeFromSelectedlist(this.itemIndex);
				}
			}
		});
	}

	onSelect(): void {
		this.listCheck.setValue(true);
	}

	onClear(): void {
		this.unchecking = true;
		this.listCheck.setValue(false);
		this.unchecking = false;
	}

	ngOnDestroy() {}
}
