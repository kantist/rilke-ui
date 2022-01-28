import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListToolbarService } from '../../../services/list-toolbar.service';

@Component({
	selector: 'ril-list-item',
	templateUrl: './list-item.component.html',
	styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit, OnDestroy {
	@Input() checkbox: boolean;
	@Input() itemIndex: number;

	listCheck = new FormControl(false);

	constructor(private listToolbar: ListToolbarService) {
		this.listToolbar.allSelected.subscribe((res) => {
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
				this.listToolbar.addToSelectedList(this.itemIndex, res);
			} else {
				this.listToolbar.removeFromSelectedlist(this.itemIndex);
			}
		});
	}

	onClear(): void {}

	ngOnDestroy() {}
}
