import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAListHeaderComponent } from './header.component';

describe('KAListHeaderComponent', () => {
	let component: KAListHeaderComponent;
	let fixture: ComponentFixture<KAListHeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAListHeaderComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAListHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
