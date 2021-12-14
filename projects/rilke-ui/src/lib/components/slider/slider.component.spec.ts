import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KASliderComponent } from './slider.component';

describe('KASliderComponent', () => {
	let component: KASliderComponent;
	let fixture: ComponentFixture<KASliderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KASliderComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KASliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
