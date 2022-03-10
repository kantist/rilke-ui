import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Materials
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// 3rd Party
import { ColorChromeModule } from 'ngx-color/chrome';

// Components
import { AlertComponent } from './components/alert/alert.component';
import { AutocompleteComponent } from './components/auto-complete/auto-complete.component';
import { AvatarComponent } from './components/avatar/avatar.component';

import { BadgeComponent } from './components/badge/badge.component';
import { ButtonComponent } from './components/button/button.component';

import { CardComponent } from './components/card/card.component';
import { CardTitleComponent } from './components/card/card-title/card-title.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardImageComponent } from './components/card/card-image/card-image.component';

import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

import { DatePickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';

import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { ExpansionPanelTitleComponent } from './components/expansion-panel/expansion-panel-title/expansion-panel-title.component';
import { ExpansionPanelDescriptionComponent } from './components/expansion-panel/expansion-panel-description/expansion-panel-description.component';
import { ExpansionPanelContentComponent } from './components/expansion-panel/expansion-panel-content/expansion-panel-content.component';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormLabelComponent } from './components/form-label/form-label.component';
import { InputComponent } from './components/input/input.component';

import { ListComponent } from './components/list/list.component';
import { ListHeaderComponent } from './components/list/list-header/list-header.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { ListToolbarComponent } from './components/list/list-toolbar/list-toolbar.component';

import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/item/item.component';
import { MenuItemsComponent } from './components/menu/items/items.component';

import { PaginationComponent } from './components/pagination/pagination.component';

import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { RadioComponent } from './components/radio/radio.component';
import { RadioOptionComponent } from './components/radio/radio-option/radio-option.component';

import { RangeSliderComponent } from './components/range-slider/range-slider.component';
import { SelectComponent } from './components/select/select.component';
import { SelectOptionComponent } from './components/select/select-option/select-option.component';
import { SwitcherComponent } from './components/switcher/switcher.component';

import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { TextAreaComponent } from './components/text-area/text-area.component';

// Pipes
import { InitialLetterPipe } from './pipes/initial-letter.pipe';

// Directives
import { StopPropagation } from './directives/stop-propagation.directive';
import { FormDescriptionComponent } from './components/form-description';

const materialModules = [
	CdkTreeModule,
	MatAutocompleteModule,
	MatButtonModule,
	MatCardModule,
	MatCheckboxModule,
	MatChipsModule,
	MatDividerModule,
	MatExpansionModule,
	MatIconModule,
	MatInputModule,
	MatListModule,
	MatMenuModule,
	MatProgressSpinnerModule,
	MatPaginatorModule,
	MatRippleModule,
	MatSelectModule,
	MatSidenavModule,
	MatSliderModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatButtonToggleModule,
	MatTreeModule,
	OverlayModule,
	PortalModule,
	MatBadgeModule,
	MatGridListModule,
	MatRadioModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatTooltipModule,
	MatDialogModule,
	MatBottomSheetModule,
];

@NgModule({
	declarations: [
		// Components
		AlertComponent,
		AutocompleteComponent,
		AvatarComponent,

		BadgeComponent,
		ButtonComponent,

		CardComponent,
		CardTitleComponent,
		CardContentComponent,
		CardImageComponent,

		CheckboxComponent,
		ColorPickerComponent,

		DatePickerComponent,
		DialogComponent,

		ExpansionPanelComponent,
		ExpansionPanelTitleComponent,
		ExpansionPanelDescriptionComponent,
		ExpansionPanelContentComponent,

		FileUploadComponent,
		FormGroupComponent,
		FormLabelComponent,
		FormDescriptionComponent,
		InputComponent,

		ListComponent,
		ListHeaderComponent,
		ListItemComponent,
		ListToolbarComponent,

		MenuComponent,
		MenuItemComponent,
		MenuItemsComponent,

		PaginationComponent,
		ProgressSpinnerComponent,
		RadioComponent,
		RadioOptionComponent,
		RangeSliderComponent,
		SelectComponent,
		SelectOptionComponent,
		SwitcherComponent,

		TabsComponent,
		TabComponent,
		TextAreaComponent,

		// Pipes
		InitialLetterPipe,

		// Directives
		StopPropagation,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		// Materials
		materialModules,
		ColorChromeModule,
	],
	exports: [
		// Components
		AlertComponent,
		AutocompleteComponent,
		AvatarComponent,

		BadgeComponent,
		ButtonComponent,

		CardComponent,
		CardTitleComponent,
		CardContentComponent,
		CardImageComponent,

		CheckboxComponent,
		ColorPickerComponent,

		DatePickerComponent,
		DialogComponent,

		ExpansionPanelComponent,
		ExpansionPanelTitleComponent,
		ExpansionPanelDescriptionComponent,
		ExpansionPanelContentComponent,

		FileUploadComponent,
		FormGroupComponent,
		FormLabelComponent,
		FormDescriptionComponent,
		InputComponent,

		ListComponent,
		ListHeaderComponent,
		ListItemComponent,

		MenuComponent,
		MenuItemComponent,
		MenuItemsComponent,

		PaginationComponent,
		ProgressSpinnerComponent,
		RadioComponent,
		RadioOptionComponent,
		RangeSliderComponent,
		SelectComponent,
		SelectOptionComponent,
		SwitcherComponent,

		TabsComponent,
		TabComponent,
		TextAreaComponent,

		// Pipes
		InitialLetterPipe,

		// Directives
		StopPropagation,
	],
})
export class RilkeUIModule {}
