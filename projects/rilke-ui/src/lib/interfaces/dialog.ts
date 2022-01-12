import { FormGroup } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';

export interface IDialogData {
	text: string;
	action: string;
	cancel: string;
	form?: FormGroup;
}

export interface IDialogOptions extends MatDialogConfig {
	data: IDialogData;
}
