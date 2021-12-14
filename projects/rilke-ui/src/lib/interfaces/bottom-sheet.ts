export interface IBottomSheetItems {
	name: string;
	text: string;
	subtext?: string,
	class?: string;
}

export interface IBottomSheetOptions {
	items: IBottomSheetItems[]
}