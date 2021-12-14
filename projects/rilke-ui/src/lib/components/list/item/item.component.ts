import {
	Component,
	OnInit,
	OnDestroy,
	Inject,
	Input,
	HostBinding,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import { KAListComponent } from './../list.component';

@Component({
	selector: 'ka-list-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
})
export class KAListItemComponent implements OnInit, OnDestroy {
	@HostBinding('class.opened') opened: boolean = false;

	@Input() itemIndex: number;

	listCheck = new FormControl(false);
	checkbox: boolean;
	itemOption: boolean;
	unchecking: boolean;
	checkStatus: boolean;

	constructor(
		@Inject(KAListComponent) public list: KAListComponent
	) {
		this.unchecking = false;
	}

	ngOnInit() {
		this.checkbox = this.list.checkbox;
		this.itemOption = this.list.itemOption;

		this.list.clearForm.subscribe((val) => {
			if (val) {
				this.onClear();
			}
		});

		this.list.setAll.subscribe((val) => {
			if (!val) {
				this.onClear();
			} else {
				this.onSelect();
			}
		});

		this.onChanges();
	}

	toggleDetails() {
		// TODO: kararsız çalışıyor
		if (this.list.closeOpenedList() && this.list.expandedList) {
			this.opened = !this.opened;
		}
	}

	// Get checkbox changed
	onChanges(): void {
		this.listCheck.valueChanges.subscribe((val) => {
			if (!this.unchecking) {
				this.list.setSelectedItems(this.itemIndex, val);
			}
		});
	}

	onClear(): void {
		this.unchecking = true;
		this.listCheck.setValue(false);
		this.unchecking = false;
	}

	onSelect(): void {
		this.listCheck.setValue(true);
	}

	ngOnDestroy() {
		this.list.setSelectedItems(this.itemIndex, false);
	}
}
