import { MatBottomSheetConfig } from '@angular/material/bottom-sheet';

export interface IBottomSheetOptions extends MatBottomSheetConfig {
	mobileIndicator?: boolean;
	component: any;
}
