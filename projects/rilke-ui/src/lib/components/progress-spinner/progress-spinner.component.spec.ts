import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAProgressSpinnerComponent } from './progress-spinner.component';

describe('KAProgressSpinnerComponent', () => {
	let component: KAProgressSpinnerComponent;
	let fixture: ComponentFixture<KAProgressSpinnerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAProgressSpinnerComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAProgressSpinnerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
