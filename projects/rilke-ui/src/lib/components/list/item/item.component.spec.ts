import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KAListItemComponent } from './item.component';

describe('KAListItemComponent', () => {
	let component: KAListItemComponent;
	let fixture: ComponentFixture<KAListItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KAListItemComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KAListItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
