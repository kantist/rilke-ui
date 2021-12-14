import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAInputComponent } from './input.component';

describe('KAInputComponent', () => {
	let component: KAInputComponent;
	let fixture: ComponentFixture<KAInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAInputComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
