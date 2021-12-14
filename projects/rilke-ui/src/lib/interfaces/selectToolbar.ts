import { TemplateRef, Type } from '@angular/core';

export interface ISelectToolbarOptions {
	selected?: number;
	text_selected?: Tpl;
	buttons: ISelectToolbarButtons[]
}

export interface ISelectToolbarButtons {
	name: string;
	text: string;
	icon?: string;
	class: string;
}

type Tpl = string | TemplateRef<any> | Type<any>;
export type Content<T> = string | TemplateRef<T> | Type<T>;
