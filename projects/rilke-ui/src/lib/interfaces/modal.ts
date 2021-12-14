import { TemplateRef, Type } from '@angular/core';

export interface IModal {
	body: Tpl;
	header?: Tpl;
	footer?: Tpl;
	options?: IModalOptions;
}

export interface IModalOptions {
	height?: number | string;
	width?: number | string;
	closeButton: boolean;
	overlay: boolean;
	overlayClose: boolean;
	overlayClass?: string;
	bodyClass?: string;
	wrapClass?: string;
	windowClass?: string;
	append?: string;
	class?: string;
}

type Tpl = string | TemplateRef<any> | Type<any>;
export type Content<T> = string | TemplateRef<T> | Type<T>;
