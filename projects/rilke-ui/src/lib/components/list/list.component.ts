import {
	Component,
	OnInit,
	OnChanges,
	AfterViewInit,
	Input,
	Output,
	EventEmitter,
	ElementRef,
	ChangeDetectorRef,
	ViewChild,
	HostBinding,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IListToolbarOptions } from '../../interfaces/list-toolbar';
import { ListToolbarService } from '../../services/list-toolbar.service';

@Component({
	selector: 'ril-list',
	templateUrl: './list.component.html',
	providers: [ ListToolbarService ]
})
export class ListComponent implements OnInit, OnChanges, AfterViewInit {
	@ViewChild('refHeader') refHeader: ElementRef<any>;
	@ViewChild('refItem') refItem: ElementRef<any>;

	@Input() checkbox: boolean;

	// List Toolbar
	@Input() listToolbarOptions: IListToolbarOptions;
	@Output() onToolbarButtonClick: EventEmitter<string>;

	// Pagination Inputs
	@Input() pageRouter: boolean;
	@Input() dataLength: number;
	@Input() itemsPerPage: number;
	@Output() pageChange: EventEmitter<number>;

	@HostBinding('class.loaded') @Input() loaded: boolean;

	pagesCount: number;
	page: number;

	listHeader: boolean;
	listItem: boolean;

	constructor(
		private route: ActivatedRoute,
		private cdr: ChangeDetectorRef,
		public listToolbar: ListToolbarService
	) {
		this.checkbox = false;

		// List Toolbar
		this.onToolbarButtonClick = new EventEmitter<string>();

		// Pagination
		this.pageChange = new EventEmitter<number>();
		this.pageRouter = true;
		this.itemsPerPage = 25;
		this.dataLength = 0;
		this.page = 1;
	}

	ngOnInit() {
		// Pagination
		this.route.queryParams.subscribe((x) => {
			this.listToolbar.close();
			this.page = x.page || 1;
		});
		this.calcPagesCount(this.dataLength, this.itemsPerPage);

		this.listToolbar.setOptions(this.listToolbarOptions);

		this.toolbarButtonClickListener();
	}

	ngAfterViewInit() {
		if (this.refHeader.nativeElement.innerHTML.trim()) {
			this.listHeader = true;
		}
		if (this.refItem.nativeElement.innerHTML.trim()) {
			this.listItem = true;
		}
		this.cdr.detectChanges();
	}

	toolbarButtonClickListener() {
		this.listToolbar.onToolbarButtonClick.subscribe((button) => {
			this.onToolbarButtonClick.emit(button);
		})
	}

	/* PAGINATION FUNCTIONS */
	calcPagesCount(length: number, perPage: number) {
		this.pagesCount = Math.ceil(length / perPage);
	}

	ngOnChanges() {
		this.calcPagesCount(this.dataLength, this.itemsPerPage);
	}

	pageListener(page) {
		this.pageChange.emit(page);
	}

	public get skeletonRows() {
		return Array(this.itemsPerPage);
	}
}
