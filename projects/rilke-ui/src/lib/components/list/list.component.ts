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

@Component({
	selector: 'ril-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges, AfterViewInit {
	@ViewChild('refHeader') refHeader: ElementRef<any>;
	@ViewChild('refItem') refItem: ElementRef<any>;

	@Input() checkbox: boolean;

	// Pagination Inputs
	@Input() pageRouter: boolean;
	@Input() dataLength: number;
	@Input() itemsPerPage: number;
	@Output() pageChange: EventEmitter<number>;

	@HostBinding('class.loaded') @Input() loaded: boolean;

	pagesCount: number;
	page: number;

	listHeader: boolean = false;
	listItem: boolean = false;

	constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
		this.checkbox = false;

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
