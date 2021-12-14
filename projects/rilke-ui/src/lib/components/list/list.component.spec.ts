import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAListComponent } from './list.component';

describe('KAListComponent', () => {
	let component: KAListComponent;
	let fixture: ComponentFixture<KAListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAListComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
