import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAFormComponent } from './form.component';

describe('KAFormComponent', () => {
	let component: KAFormComponent;
	let fixture: ComponentFixture<KAFormComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAFormComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
