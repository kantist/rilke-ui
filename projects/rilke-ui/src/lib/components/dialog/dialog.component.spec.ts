import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KADialogComponent } from './dialog.component';

describe('KADialogComponent', () => {
	let component: KADialogComponent;
	let fixture: ComponentFixture<KADialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KADialogComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KADialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
