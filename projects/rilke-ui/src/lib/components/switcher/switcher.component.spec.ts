import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KASwitcherComponent } from './switcher.component';

describe('KASwitcherComponent', () => {
	let component: KASwitcherComponent;
	let fixture: ComponentFixture<KASwitcherComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KASwitcherComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KASwitcherComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
