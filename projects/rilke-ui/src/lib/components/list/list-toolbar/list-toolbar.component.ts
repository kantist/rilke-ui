import {
	Component,
	OnInit,
	Input,
	EventEmitter,
	Output,
	Inject,
} from '@angular/core';
import { RIL_LANGUAGE } from '../../../common';
import { IListToolbarOptions } from '../../../interfaces/list-toolbar';

@Component({
	selector: 'ril-list-toolbar',
	templateUrl: './list-toolbar.component.html',
})
export class ListToolbarComponent implements OnInit {
	@Input() options: IListToolbarOptions;
	@Output() close: EventEmitter<boolean>;
	@Output() onToolbarButtonClick: EventEmitter<string>;

	constructor(
		@Inject(RIL_LANGUAGE) public lang
	) {
		this.close = new EventEmitter();

		this.onToolbarButtonClick = new EventEmitter<string>();
	}

	ngOnInit() {}

	closeWindow(val) {
		this.close.emit(true);
	}

	clickButton(button) {
		this.onToolbarButtonClick.emit(button);
	}
}
