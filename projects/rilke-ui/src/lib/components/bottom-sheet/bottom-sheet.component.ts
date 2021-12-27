import {
	Inject,
	Component,
	OnInit,
	Input,
	EventEmitter,
	HostListener,
	Output,
} from '@angular/core';

import { IBottomSheetOptions } from '../../interfaces/bottom-sheet';

@Component({
	selector: 'ril-bottom-sheet',
	templateUrl: './bottom-sheet.component.html',
	styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
	@HostListener('click')
	handleClick() {
		this.openBottomSheet();
	}

	@Output() clickEvents: EventEmitter<string>;

	@Input() options: IBottomSheetOptions;

	constructor() {}

	ngOnInit(): void {}

	openBottomSheet(): void {
		// this._bottomSheet.open();
	}
}
