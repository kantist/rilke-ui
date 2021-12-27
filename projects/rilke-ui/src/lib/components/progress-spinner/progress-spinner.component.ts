import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'ril-progress-spinner',
	templateUrl: './progress-spinner.component.html',
	styleUrls: ['./progress-spinner.component.scss'],
})
export class ProgressSpinnerComponent implements OnInit {
	@Input() strokeWidth: number;
	@Input() diameter: number;
	@Input() strokeColor: string;
	@Input() loadingText: string;
	@Input() mode: any;

	@HostBinding('class.ril-progress-spinner') true = true;

	constructor() {
		this.strokeWidth = 5;
		this.diameter = 50;
		this.mode = 'indeterminate';
	}

	ngOnInit() {}
}
