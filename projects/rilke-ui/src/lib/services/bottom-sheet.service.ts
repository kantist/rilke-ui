import { EventEmitter, Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { tap } from 'rxjs/operators';
import { IBottomSheetOptions } from '../interfaces/bottom-sheet';

@Injectable({ providedIn: 'root' })
export class BottomSheetService {
	statusChange: EventEmitter<boolean>;

	constructor(private _matBottom: MatBottomSheet) {
		this.statusChange = new EventEmitter<boolean>();
	}

	open(config: IBottomSheetOptions) {
		this.statusChange.emit(true);

		this._matBottom.open(config.component, config);

		this._matBottom._openedBottomSheetRef.afterDismissed().subscribe(() => {
			this.statusChange.emit(false);
		});
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
