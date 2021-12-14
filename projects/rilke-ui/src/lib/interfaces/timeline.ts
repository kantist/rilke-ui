export interface ITimelineBox {
	sectionLabel: ITimelineLabel;
	sectionData: ITimeline[];
}

export interface ITimelineLabel {
	text: string;
	view?: string;
}
export interface ITimeline {
	date: string;
	content: string;
	title: string;
	icon?: string;
	iconBg?: string;
	iconColor?: string;
}
