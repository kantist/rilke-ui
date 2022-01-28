import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'ril-progress-spinner',
	templateUrl: './progress-spinner.component.html',
})
export class ProgressSpinnerComponent implements OnInit {
	@Input() thickness: number;
	@Input() diameter: number;
	@Input() color: string;
	@Input() loadingText: string;
	@Input() mode: any;

	@HostBinding('class.ril-progress-spinner') true = true;

	constructor() {
		this.thickness = 5;
		this.diameter = 50;
		this.mode = 'indeterminate';
	}

	ngOnInit() {}
}
