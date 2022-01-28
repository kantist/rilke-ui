import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, EventEmitter, Injectable, Output } from '@angular/core';
import { ListToolbarComponent } from '../components/list/list-toolbar/list-toolbar.component';
import { IListToolbarOptions } from '../interfaces/list-toolbar';

@Injectable({ providedIn: 'root' })
export class ListToolbarService {
	componentRef: ComponentRef<any>;
	overlayRef: OverlayRef;

	selectedList: any;

	isOpen: boolean;

	@Output() allSelected: EventEmitter<boolean>;
	@Output() onToolbarConfirmed: EventEmitter<any>;

	constructor(private overlay: Overlay) {
		this.selectedList = {};
		this.isOpen = false;

		this.allSelected = new EventEmitter<boolean>();
		this.onToolbarConfirmed = new EventEmitter<any>();
	}

	open() {
		let options: OverlayConfig = {
			panelClass: 'list-toolbar-panel',
			hasBackdrop: false,
		};

		this.overlayRef = this.overlay.create(options);
		this.overlayRef.hostElement.classList.add(
			'list-toolbar-overlay-wrapper'
		);
		const modalPortal = new ComponentPortal(ListToolbarComponent);
		this.overlayRef.attach(modalPortal);

		this.isOpen = true;
	}

	close() {
		this.overlayRef.dispose();
		this.isOpen = false;

		this.selectedList = {};
		this.allSelected.emit(false);
	}

	get selectedListQuantity() {
		return Object.keys(this.selectedList).length;
	}

	addToSelectedList(index: number, value: boolean) {
		this.selectedList[index] = value;

		if (!this.isOpen) this.open();
	}
	removeFromSelectedlist(index: number) {
		delete this.selectedList[index];

		if (Object.keys(this.selectedList).length == 0) this.close();
	}
	selectAll(list: any) {
		this.selectedList = {};
		list.forEach((item, index) => {
			this.addToSelectedList(index, true);
		});
		this.allSelected.emit(true);
	}
	removeAll() {
		this.selectedList = {};
		this.allSelected.emit(false);
		this.close();
	}
	toolbarConfirmed() {
		this.onToolbarConfirmed.emit(this.selectedList);
		this.close();
	}
}
