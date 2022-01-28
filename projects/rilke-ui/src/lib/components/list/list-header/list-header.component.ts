import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListToolbarService } from '../../../services/list-toolbar.service';

@Component({
	selector: 'ril-list-header',
	templateUrl: './list-header.component.html',
})
export class ListHeaderComponent implements OnInit {
	@Input() checkbox: boolean;
	@Input() list: any;

	listCheck = new FormControl(false);

	constructor(private listToolbar: ListToolbarService) {
		this.listToolbar.allSelected.subscribe((res) => {
			if (!res) {
				this.listCheck.setValue(false);
			}
		});
	}

	itemOption: boolean;

	ngOnInit() {
		this.listCheck.valueChanges.subscribe((res) => {
			if (res == true) {
				this.listToolbar.selectAll(this.list);
			} else {
				this.listToolbar.removeAll();
			}
		});
	}

	onClear(): void {
		this.listCheck.setValue(false);
	}
}
