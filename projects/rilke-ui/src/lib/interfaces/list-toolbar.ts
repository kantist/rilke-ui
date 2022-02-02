import { TemplateRef, Type } from '@angular/core';

export interface IListToolbarOptions {
	text_selected?: Tpl;
	buttons?: IListToolbarButtons[];
}

export interface IListToolbarButtons {
	name: string;
	text: string;
	icon?: string;
	class: string;
}

type Tpl = string | TemplateRef<any> | Type<any>;
export type Content<T> = string | TemplateRef<T> | Type<T>;
