import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, EventEmitter, Injectable, Output } from '@angular/core';
import { ListToolbarComponent } from '../components/list/list-toolbar/list-toolbar.component';
import { IListToolbarOptions } from '../interfaces/list-toolbar';

@Injectable()
export class ListToolbarService {
	componentRef: ComponentRef<any>;
	overlayRef: OverlayRef;

	selectedList: any;
	toolbarOptions: IListToolbarOptions;

	isOpen: boolean;

	@Output() allSelected: EventEmitter<boolean>;
	@Output() onToolbarButtonClick: EventEmitter<string>;

	constructor(private overlay: Overlay) {
		this.selectedList = {};
		this.isOpen = false;

		this.allSelected = new EventEmitter<boolean>();
		this.onToolbarButtonClick = new EventEmitter<string>();
	}

	setOptions(options: IListToolbarOptions) {
		this.toolbarOptions = options;
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
		this.componentRef = this.overlayRef.attach(modalPortal);

		this.componentRef.instance.options = this.toolbarOptions;

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

	selectAll() {
		this.allSelected.emit(true);
	}

	removeAll() {
		this.selectedList = {};
		this.allSelected.emit(false);
		this.close();
	}

	toolbarButtonClick(button: string) {
		this.onToolbarButtonClick.emit(button);
		this.close();
	}
}
