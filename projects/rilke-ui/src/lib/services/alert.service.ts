import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AlertComponent } from '../components/alert/alert.component';

@Injectable({ providedIn: 'root' })
export class AlertService {
  durationInSeconds: number;
  constructor(private _snackBar: MatSnackBar) {}

  show(config: MatSnackBarConfig) {
  	this._snackBar.openFromComponent(AlertComponent, {
  		data: config.data,
  		duration: config.duration || 3000,
  		horizontalPosition: config.horizontalPosition || 'center',
  		verticalPosition: config.verticalPosition || 'top',
  	});
  }

  close() {
  	this._snackBar.dismiss();
  }
}
