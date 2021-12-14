import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KACheckboxComponent } from './checkbox.component';

describe('KACheckboxComponent', () => {
	let component: KACheckboxComponent;
	let fixture: ComponentFixture<KACheckboxComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KACheckboxComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KACheckboxComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
