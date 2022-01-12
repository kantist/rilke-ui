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
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { KASelectToolbarService } from '@ui/services/select-toolbar/select-toolbar.service';

// import { ISelectToolbarOptions } from '@ui/interfaces/selectToolbar';

@Component({
	selector: 'ril-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
	// providers: [KASelectToolbarService],
})
export class ListComponent implements OnInit, OnChanges, AfterViewInit {
	@ViewChild('refHeader') refHeader: ElementRef<any>;
	@ViewChild('refItem') refItem: ElementRef<any>;

	@Input() checkbox: boolean;
	@Input() itemOption: boolean;

	// Pagination Inputs
	@Input() pageRouter: boolean;
	@Input() dataLength: number;
	@Input() itemsPerPage: number;
	@Output() pageChange: EventEmitter<number>;

	// Select toolbar
	// @Input() selectToolbarOptions: ISelectToolbarOptions;
	@Output() checkedItems: EventEmitter<any[]>;
	@Output() clearForm: EventEmitter<boolean>;
	@Output() setAll: EventEmitter<boolean>;
	@Output() buttonEvents: EventEmitter<string>;

	// Item
	@Input() expandedList: boolean;

	selectedTotal: number;
	itemPool: any[];

	pagesCount: number;
	page: number;

	listHeader: boolean = false;
	listItem: boolean = false;

	constructor(
		private el: ElementRef,
		// private selectToolbar: KASelectToolbarService,
		private route: ActivatedRoute,
		private cdr: ChangeDetectorRef
	) {
		this.checkbox = false;
		this.itemOption = false;

		this.checkedItems = new EventEmitter<any[]>();
		this.clearForm = new EventEmitter();
		this.setAll = new EventEmitter();

		// Select toolbar button init
		this.buttonEvents = new EventEmitter<string>();

		this.selectedTotal = 0;
		this.itemPool = [];

		this.expandedList = false;

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
			// this.selectToolbar.close();
			this.page = x.page || 1;
		});
		this.calcPagesCount(this.dataLength, this.itemsPerPage);

		// Select toolbar close event
		// this.selectToolbar.toolbarClosed.subscribe((closed) => {
		// 	if (closed) {
		// 		this.checkedItems.emit([]);
		// 		this.clearForm.emit(true);
		// 		this.itemPool = [];
		// 	}
		// });

		// Select toolbar button events
		// this.selectToolbar.buttonClick.subscribe((name) => {
		// 	this.buttonEvents.emit(name);
		// });
	}

	emitSetAll(val) {
		this.setAll.emit(val);

		if (!val) this.setUncheckAll();
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

	closeOpenedList() {
		const lists = this.el.nativeElement.querySelectorAll('ka-list-item');

		lists.forEach((element) => {
			element.classList.remove('opened');
		});

		return true;
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

	/* SELECT TOOLBAR FUNCTIONS */
	// openSelectToolbar(
	// 	selected: any = null,
	// 	text_selected: any = null,
	// 	printButton: boolean = false,
	// 	copyButton: boolean = false,
	// 	deleteButton: boolean = false
	// ) {
	// 	this.selectToolbar.open(this.selectToolbarOptions);
	// }

	// setSelectToolbar() {
	// 	this.selectedTotal = this.itemPool.length;

	// 	if (!this.selectToolbar.componentRef) {
	// 		this.selectToolbarOptions.selected = this.selectedTotal;
	// 		this.selectToolbar.open(this.selectToolbarOptions);
	// 	}

	// 	this.selectToolbar.setSelected(this.selectedTotal);
	// }

	setSelectedItems(index: number, value: boolean) {
		if (value == true) {
			if (!this.itemPool.includes(index)) this.itemPool.push(index);
		} else {
			const selected_item_index: number = this.itemPool.indexOf(index);

			if (selected_item_index !== -1) {
				this.itemPool.splice(selected_item_index, 1);
			}
		}

		this.checkedItems.emit(this.itemPool);

		// if (this.selectToolbarOptions) this.setSelectToolbar();
	}

	setUncheckAll() {
		this.itemPool = [];
		this.checkedItems.emit(this.itemPool);

		// if (this.selectToolbarOptions) this.setSelectToolbar();
	}

	public get skeletonRows() {
		return Array(this.itemsPerPage);
	}
}
