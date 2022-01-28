import {
	Component,
	OnInit,
	Input,
	EventEmitter,
	HostBinding,
	Output,
} from '@angular/core';
import { Content, IListToolbarOptions } from '../../../interfaces/list-toolbar';
import { ListToolbarService } from '../../../services/list-toolbar.service';

@Component({
	selector: 'ril-list-toolbar',
	templateUrl: './list-toolbar.component.html',
	styleUrls: ['./list-toolbar.component.scss'],
})
export class ListToolbarComponent implements OnInit {
	@HostBinding('class.active') opened: boolean = true;

	@Input() options: IListToolbarOptions;

	constructor(public toolbarService: ListToolbarService) {}

	ngOnInit() {}

	closeWindow(val) {
		this.toolbarService.close();
	}

	clickButton(val) {
		this.toolbarService.toolbarConfirmed();
	}
}
