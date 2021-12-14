export interface IToolbarButtons {
	name: string;
	text: string;
	icon: string;
	class: string;
	position?: string;
}

export interface IToolbarOrders {
	name: string;
	sort: string;
	text: string;
}

export interface IToolbarOptions {
	searchRouter: boolean,
	buttons: IToolbarButtons[],
	orders?: IToolbarOrders[]
}