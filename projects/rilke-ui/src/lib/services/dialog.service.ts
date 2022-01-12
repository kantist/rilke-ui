import { Injectable } from '@angular/core';

import { pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
	constructor(private dialog: MatDialog) {}

	show(config: MatDialogConfig) {
		const dialogRef = this.dialog.open(DialogComponent, {
			data: config.data,
		});

		return dialogRef.componentInstance.onResults.pipe(
			tap((res: any) => res)
		);
	}
}
