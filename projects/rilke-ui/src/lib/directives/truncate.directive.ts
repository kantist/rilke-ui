import { Directive, OnInit, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
	selector: '[ril-truncate]'
})
export class TruncateDirective implements OnInit, OnChanges {
	@HostBinding('style.display')  get getDisplay () { return '-webkit-box'}
	@HostBinding('style.-webkit-box-orient') get getOrient () { return 'vertical'}
	@HostBinding('style.overflow') get getOverflow () { return 'hidden'}

	@HostBinding('style.-webkit-line-clamp') get getRow() {
		return this.line ? this.line : 2;
	}

	@Input() line: string | number;

	ngOnInit() {
	}

	ngOnChanges() {
	}
}
