import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
	selector: 'ril-alert',
	templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
	text: string;
	type: string;
	action: string;
	constructor(
		@Inject(MAT_SNACK_BAR_DATA) public data: any,
		private _snackBar: MatSnackBar
	) {
		this.type = this.data.type || 'default';
		this.action = this.data.action;
		this.text = this.data.text;
	}

	ngOnInit() {}

	onClick() {
		this._snackBar.dismiss();
	}
}
