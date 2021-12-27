import {
	Component,
	OnInit,
	Input,
	EventEmitter,
	HostBinding,
	ViewChild,
	ElementRef,
	Output,
} from '@angular/core';

import { Observable } from 'rxjs';

import { ModalService } from '../services/modal/modal.service';
import { Content, IModalOptions } from '@ui/interfaces/modal';
import { FormGroup } from '@angular/forms';

type dialogType = 'prompt' | 'confirm';

@Component({
	selector: 'ka-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.scss'],
})
export class KADialogComponent {
	@ViewChild('dialogContent') dialogContent: Content<ElementRef>;

	@Input() title: string;
	@Input() message: string;
	@Input() type: dialogType = 'confirm';
	@Input() form: FormGroup;
	@Input() labels: any;
	@Input() confirmText: string;
	@Input() cancelText: string;

	formArray: any[];

	@Output() close: EventEmitter<boolean>;
	@Output() formResult: EventEmitter<any>;

	constructor(private modal: ModalService) {
		this.close = new EventEmitter();
		this.formResult = new EventEmitter(null);
	}

	open() {
		if (this.form) {
			this.formArray = Object.keys(this.form.controls);
		}

		let modalOptions: IModalOptions = {
			height: '100%',
			width: '35vw',
			closeButton: true,
			overlay: true,
			overlayClose: true,
		};

		if (this.type == 'prompt') {
			modalOptions.windowClass = 'dark';
		}

		this.modal.open({
			body: this.dialogContent,
			header: null,
			footer: null,
			options: modalOptions,
		});
	}

	confirm() {
		this.close.emit(true);
		this.modal.close();
	}

	dismiss() {
		this.close.emit(false);
		this.modal.close();
	}

	hideModal() {
		this.close.emit(false);
		this.modal.close();
	}

	onSubmit() {
		this.close.emit(true);
		this.formResult.emit(this.form);
		this.modal.close();
	}
}
