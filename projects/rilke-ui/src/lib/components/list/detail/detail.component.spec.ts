import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAListDetailComponent } from './detail.component';

describe('KAListDetailComponent', () => {
	let component: KAListDetailComponent;
	let fixture: ComponentFixture<KAListDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAListDetailComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAListDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
