import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAOptionComponent } from './option.component';

describe('KAOptionComponent', () => {
	let component: KAOptionComponent;
	let fixture: ComponentFixture<KAOptionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAOptionComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAOptionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
