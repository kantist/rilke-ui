import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
	constructor(
		private overlay: Overlay,
		private viewContainerRef: ViewContainerRef
	) {}

	open(component) {
		const overlayRef = this.overlay.create();
		overlayRef.attach(
			new ComponentPortal(component, this.viewContainerRef)
		);
	}
}
