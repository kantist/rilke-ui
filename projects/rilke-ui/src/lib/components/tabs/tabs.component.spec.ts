import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KATabsComponent } from './tabs.component';

describe('KATabsComponent', () => {
	let component: KATabsComponent;
	let fixture: ComponentFixture<KATabsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KATabsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KATabsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
