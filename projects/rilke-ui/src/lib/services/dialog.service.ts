import {
	ApplicationRef,
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	Inject,
	Injectable,
	Injector,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class DialogService {
	componentRef: ComponentRef<any>;

	constructor(
		private resolver: ComponentFactoryResolver,
		private injector: Injector,
		private appRef: ApplicationRef,
		@Inject(DOCUMENT) private document: Document
	) {}

	public confirm(
		title: string,
		message: string,
		confirmText: string = 'Onayla',
		cancelText: string = 'Vazgeç'
	): Promise<boolean> {
		this.open({
			title: title,
			message: message,
			confirmText: confirmText,
			cancelText: cancelText,
		});

		return new Promise((resolve, reject) => {
			this.componentRef.instance.close.subscribe((data) => {
				this.detach();
				data ? resolve(data) : reject(data);
			});
		});
	}

	public prompt(
		title: string,
		message: string,
		form: FormGroup,
		labels: any,
		confirmText: string = 'Onayla',
		cancelText: string = 'Vazgeç'
	): Promise<any> {
		this.open({
			type: 'prompt',
			title: title,
			message: message,
			form: form,
			labels: labels,
			confirmText: confirmText,
			cancelText: cancelText,
		});

		return new Promise((resolve, reject) => {
			this.componentRef.instance.formResult.subscribe((data) => {
				this.detach();
				data ? resolve(data) : reject(data);
			});
		});
	}

	open(options) {
		const FACTORY: ComponentFactory<any> =
			this.resolver.resolveComponentFactory(KADialogComponent);

		this.componentRef = FACTORY.create(this.injector);

		// add modal @Input parameters
		this.componentRef.instance.title = options.title;
		this.componentRef.instance.message = options.message;
		this.componentRef.instance.confirmText = options.confirmText;
		this.componentRef.instance.cancelText = options.cancelText;

		if (options.type == 'prompt') {
			this.componentRef.instance.type = options.type;
			this.componentRef.instance.form = options.form;
			this.componentRef.instance.labels = options.labels;
		}

		let { nativeElement } = this.componentRef.location;

		this.componentRef.hostView.detectChanges();
		this.appRef.attachView(this.componentRef.hostView);

		this.document.body.appendChild(nativeElement);

		this.componentRef.instance.open();
	}

	detach() {
		if (this.componentRef) {
			this.appRef.detachView(this.componentRef.hostView);
			this.componentRef.destroy();
		}
	}
}
