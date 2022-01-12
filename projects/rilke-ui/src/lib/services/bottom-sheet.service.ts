import { Injectable } from '@angular/core';
import {
	MatBottomSheet,
	MatBottomSheetConfig,
	MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { tap } from 'rxjs/operators';
import { IBottomSheetOptions } from '../interfaces/bottom-sheet';

@Injectable({ providedIn: 'root' })
export class BottomSheetService {
	constructor(private _matBottom: MatBottomSheet) {}

	open(config: IBottomSheetOptions) {
		console.log('from ui');
		this._matBottom.open(config.component);
	}

	close() {
		this._matBottom.dismiss();
	}

	afterClose() {
		return this._matBottom._openedBottomSheetRef
			.afterDismissed()
			.pipe(tap((res: any) => res));
	}
}
