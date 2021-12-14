import { style } from '@angular/animations';
import {
	Inject,
	Component,
	OnInit,
	Input,
	EventEmitter,
	HostBinding,
	HostListener,
	Output,
} from '@angular/core';

@Component({
	selector: 'ka-progress-spinner',
	templateUrl: './progress-spinner.component.html',
	styleUrls: ['./progress-spinner.component.scss'],
})
export class KAProgressSpinnerComponent implements OnInit {
	@Input() strokeWidth: number;
	@Input() diameter: number;
	@Input() strokeColor: string;
	@Input() loadingText: string;
	@Input() mode: string;

	// @HostBinding('style.backgroundColor') get backgroundColor() {
	// 	return `#${this.strokeColor}`;
	// }

	constructor() {
		this.strokeWidth = 5;
		this.diameter = 50;
		this.mode = 'indeterminate';
	}

	ngOnInit() {}
}
