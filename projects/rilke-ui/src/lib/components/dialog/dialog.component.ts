import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IDialogData } from '../../interfaces/dialog';

@Component({
	selector: 'ril-dialog',
	templateUrl: 'dialog.component.html',
	styleUrls: ['dialog.component.scss'],
})
export class DialogComponent implements OnInit {
	onResults: Observable<boolean>;
	@Output() onResult: EventEmitter<boolean>;
	form: FormGroup;

	formArray: any[];

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: IDialogData,
		private dialogRef: MatDialogRef<any>
	) {
		this.onResult = new EventEmitter<boolean>(null);
		this.onResults = this.onResult.asObservable();
	}

	ngOnInit() {
		if (this.data.form) {
			this.formArray = Object.keys(this.data.form.controls);
		}
	}

	onCancel() {
		this.onResult.emit(false);
		this.dialogRef.close();
	}

	onAction() {
		this.onResult.emit(true);
		this.dialogRef.close();
	}
}
