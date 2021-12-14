import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KASelectComponent } from './select.component';

describe('KASelectComponent', () => {
	let component: KASelectComponent;
	let fixture: ComponentFixture<KASelectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KASelectComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KASelectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
