import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAFormDescriptionComponent } from './form-description.component';

describe('KAFormDescriptionComponent', () => {
	let component: KAFormDescriptionComponent;
	let fixture: ComponentFixture<KAFormDescriptionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAFormDescriptionComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAFormDescriptionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
