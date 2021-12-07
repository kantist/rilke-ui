import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: '[ril-button]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @HostBinding('class.ril-btn') true;
  @HostBinding('class.btn-disabled') @Input() disabled: boolean;
  @HostBinding('class.btn-load') @Input() load: boolean;
  @HostBinding('class.btn-left') get alignLeft() {
  	return this.align === 'left';
  }
  @HostBinding('class.btn-right') get alignRight() {
  	return this.align === 'right';
  }
  @HostBinding('class.btn-sm') get sizeSm() {
  	return this.size === 'sm';
  }
  @HostBinding('class.btn-lg') get sizeLg() {
  	return this.size === 'lg';
  }
  @HostBinding('class.btn-accent') get viewAccent() {
  	return this.view === 'accent';
  }
  @HostBinding('class.btn-success') get viewSuccess() {
  	return this.view === 'success';
  }
  @HostBinding('class.btn-warning') get viewWarning() {
  	return this.view === 'warning';
  }
  @HostBinding('class.btn-error') get viewError() {
  	return this.view === 'error';
  }
  @HostBinding('class.btn-info') get viewInfo() {
  	return this.view === 'info';
  }
  @HostBinding('class.btn-light') get viewLight() {
  	return this.view === 'light';
  }
  @HostBinding('class.btn-dark') get viewDark() {
  	return this.view === 'dark';
  }

  @HostBinding('class.btn-outline') @Input() outline: boolean;
  @HostBinding('class.btn-shadow') @Input() shadow: boolean;

  @Input() align: string;
  @Input() size: string;
  @Input() view: string;
  @Input() tcLineStyle: string;
  @Input() beforeIcon: string;
  @Input() afterIcon: string;

  constructor() {
  	this.disabled = false;
  	this.load = false;
  	this.outline = false;
  	this.shadow = false;
  	this.align = 'center';
  	this.size = 'md';
  	this.view = 'default';
  }

  ngOnInit() {}
}
