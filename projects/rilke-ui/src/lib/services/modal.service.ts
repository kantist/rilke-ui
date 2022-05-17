import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'any' })
export class ModalService {
	overlayRef: OverlayRef;
	constructor(
		private overlay: Overlay //private viewContainerRef: ViewContainerRef
	) {}

	open(component) {
		// const overlayRef = this.overlay.create();
		// overlayRef.attach(
		// 	new ComponentPortal(component, this.viewContainerRef)
		// );

		let options: OverlayConfig = {
			panelClass: 'modal-panel',
			hasBackdrop: true,
			backdropClass: 'modal-overlay-backdrop',
		};

		this.overlayRef = this.overlay.create(options);
		this.overlayRef.hostElement.classList.add('modal-overlay-wrapper');
		const modalPortal = new ComponentPortal(component);
		this.overlayRef.attach(modalPortal);

		this.overlayRef.backdropClick().subscribe((e) => {
			this.close();
		});
	}
	close() {
		this.overlayRef.dispose();
	}
}
