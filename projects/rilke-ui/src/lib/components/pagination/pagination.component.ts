import {
	Component,
	OnInit,
	HostBinding,
	Input,
	Output,
	EventEmitter,
	OnChanges,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ril-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
	@HostBinding('class.ril-pagination') true: boolean = true;

	@Input() pageRouter: boolean;
	@Input() pagesNumber: number;
	@Input() pageNum: number;

	@Output() pageChange: EventEmitter<number>;

	pages: Array<number>;
	dynamicPages: Array<number>;

	constructor(private router: Router, private route: ActivatedRoute) {
		this.pagesNumber = 1;
		this.pageNum = 1;

		this.pageRouter = true;

		this.pageChange = new EventEmitter<number>();
	}

	public changePage(page: number) {
		this.pageNum = page;

		if (page >= 4) {
			this.dynamicPages = this.pages.slice(page - 3, page + 2);
		} else {
			this.dynamicPages = this.pages.slice(0, 5);
		}

		this.goPage();
	}

	public lastPage() {
		this.pageNum = this.getLast();
		this.goPage();
		this.dynamicPages = this.pages.slice(
			this.getLast() - 3,
			this.getLast()
		);
	}

	public firstPage() {
		this.pageNum = 1;
		this.goPage();
		this.dynamicPages = this.pages.slice(0, 5);
	}

	goPage() {
		if (this.pageRouter) {
			console.log('pageRouter');
			this.router.navigate(['.'], {
				relativeTo: this.route,
				queryParamsHandling: 'merge',
				queryParams: { page: this.pageNum },
			});
		} else {
			this.pageChange.emit(this.pageNum);
		}
	}

	ngOnInit() {
		this.pages = Array.from(Array(this.pagesNumber), (x, i) => i + 1);
		this.dynamicPages = this.pages.slice(0, 5);
	}

	ngOnChanges() {
		this.ngOnInit();
	}

	getLast(): number {
		return this.pages[this.pages.length - 1];
	}
}
