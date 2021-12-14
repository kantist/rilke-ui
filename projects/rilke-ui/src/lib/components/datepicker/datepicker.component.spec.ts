import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KADatepickerComponent } from './datepicker.component';

describe('KADatepickerComponent', () => {
	let component: KADatepickerComponent;
	let fixture: ComponentFixture<KADatepickerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KADatepickerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KADatepickerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
