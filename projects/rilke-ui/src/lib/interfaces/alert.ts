import {
	MatSnackBarConfig,
	MatSnackBarHorizontalPosition,
	MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

export type TAlertTypes = 'default' | 'error' | 'warning' | 'success' | 'info';

export interface IAlertOptions extends MatSnackBarConfig {
  duration?: number;
  data?: {
    text: string;
    action?: string;
    type?: TAlertTypes;
  };
  horizontalPosition?: MatSnackBarHorizontalPosition;
  verticalPosition?: MatSnackBarVerticalPosition;
}
