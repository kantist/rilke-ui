import {
	Inject,
	Component,
	OnInit,
	Input,
	EventEmitter,
	HostListener,
	Output,
} from '@angular/core';

import {
	MatBottomSheet,
	MatBottomSheetRef,
	MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { IBottomSheetOptions } from '@ui/interfaces/bottom-sheet';

@Component({
	selector: '[ka-bottom-sheet]',
	template: '<ng-content></ng-content>',
})
export class KABottomSheetComponent implements OnInit {
	@HostListener('click')
	handleClick() {
		this.openSheet();
	}

	@Output() clickEvents: EventEmitter<string>;

	@Input() options: IBottomSheetOptions;

	constructor(private _bottomSheet: MatBottomSheet) {
		this.clickEvents = new EventEmitter<string>();
	}

	ngOnInit() {}

	openSheet() {
		this._bottomSheet.open(KABottomSheetOverviewComponent, {
			data: this.options,
		});

		this._bottomSheet._openedBottomSheetRef
			.afterDismissed()
			.subscribe((itemName) => {
				this.clickEvents.emit(itemName);
			});
	}
}

@Component({
	selector: 'ka-bottom-sheet-overview',
	templateUrl: './bottom-sheet.component.html',
	styleUrls: ['./bottom-sheet.component.scss'],
})
export class KABottomSheetOverviewComponent {
	dataSource = this.data;

	constructor(
		@Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
		private _bottomSheetRef: MatBottomSheetRef<KABottomSheetOverviewComponent>
	) {}

	clickItem(name) {
		this._bottomSheetRef.dismiss(name);
	}
}
