import {
	Component,
	OnInit,
	Input,
	EventEmitter,
	Output,
} from '@angular/core';
import { IListToolbarOptions } from '../../../interfaces/list-toolbar';

@Component({
	selector: 'ril-list-toolbar',
	templateUrl: './list-toolbar.component.html',
})
export class ListToolbarComponent implements OnInit {
	@Input() options: IListToolbarOptions;
	@Output() close: EventEmitter<boolean>;
	@Output() onToolbarButtonClick: EventEmitter<string>;

	constructor() {
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
