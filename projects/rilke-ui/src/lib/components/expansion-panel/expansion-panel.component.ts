import {
	Component,
	AfterContentInit,
	Inject,
	Input,
	Output,
	ElementRef,
} from '@angular/core';

type MatAccordionTogglePosition = 'before' | 'after';

@Component({
	selector: 'ril-expansion-panel',
	templateUrl: './expansion-panel.component.html',
	styleUrls: ['./expansion-panel.component.scss'],
})
export class ExpansionPanelComponent implements AfterContentInit {
  @Input() title: any;
  @Input() description: any;

  // Material
  @Input() disabled: any;
  @Input() expanded: any;
  @Input() hideToggle: boolean;
  @Input() togglePosition: MatAccordionTogglePosition;

  constructor(@Inject(ElementRef) private element: ElementRef) {
  	this.title = '';
  	this.description = '';

  	this.disabled = false;
  	this.expanded = false;
  	this.hideToggle = false;
  	this.togglePosition = 'after';
  }

  ngAfterContentInit() {}
}
