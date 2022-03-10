import { EventEmitter, Injectable } from '@angular/core';
import {
	MatBottomSheet,
	MatBottomSheetConfig,
	MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { tap } from 'rxjs/operators';
import { IBottomSheetOptions } from '../interfaces/bottom-sheet';

@Injectable({ providedIn: 'root' })
export class BottomSheetService {
	statusChange: EventEmitter<boolean>;

	constructor(private _matBottom: MatBottomSheet) {}

	open(config: IBottomSheetOptions) {
		this.statusChange.emit(true);

		this._matBottom.open(config.component, config);
	}

	close() {
		this.statusChange.emit(false);
		this._matBottom.dismiss();
	}

	afterClose() {
		return this._matBottom._openedBottomSheetRef
			.afterDismissed()
			.pipe(tap((res: any) => {
				this.statusChange.emit(false);
				return res
			}));
	}
}
