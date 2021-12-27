import { Injectable } from '@angular/core';
import {
	MatBottomSheet,
	MatBottomSheetConfig,
	MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../components/bottom-sheet/bottom-sheet.component';

@Injectable({ providedIn: 'root' })
export class BottomSheetService {
	constructor(private _matBottom: MatBottomSheet) {}

	open(config: MatBottomSheetConfig) {
		console.log('from ui');
		this._matBottom.open(BottomSheetComponent, {});
	}

	close() {
		//this._matBottom.dismiss();
	}
}
