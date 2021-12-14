import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KATextareaComponent } from './textarea.component';

describe('KATextareaComponent', () => {
	let component: KATextareaComponent;
	let fixture: ComponentFixture<KATextareaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ KATextareaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(KATextareaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
