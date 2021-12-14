import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAFormLabelComponent } from './form-label.component';

describe('KAFormLabelComponent', () => {
	let component: KAFormLabelComponent;
	let fixture: ComponentFixture<KAFormLabelComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAFormLabelComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAFormLabelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
