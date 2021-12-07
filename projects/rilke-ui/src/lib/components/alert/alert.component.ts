import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AlertService } from '../../services/alert.service';

@Component({
	selector: 'ril-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  text: string;
  type: string;
  action: string;
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private alertService: AlertService
  ) {
  	this.type = this.data.type || 'default';
  	this.action = this.data.action;
  	this.text = this.data.text;
  }

  ngOnInit() {}

  onClick() {
  	this.alertService.close();
  }
}
