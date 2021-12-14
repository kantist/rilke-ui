import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAPaginationComponent } from './pagination.component';

describe('KAPaginationComponent', () => {
	let component: KAPaginationComponent;
	let fixture: ComponentFixture<KAPaginationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAPaginationComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAPaginationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
