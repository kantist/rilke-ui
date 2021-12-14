import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAFormGroupComponent } from './form-group.component';

describe('KAFormGroupComponent', () => {
	let component: KAFormGroupComponent;
	let fixture: ComponentFixture<KAFormGroupComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAFormGroupComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAFormGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
