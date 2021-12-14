import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KATabComponent } from './tab.component';

describe('KATabComponent', () => {
	let component: KATabComponent;
	let fixture: ComponentFixture<KATabComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KATabComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KATabComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
