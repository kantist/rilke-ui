import { CommonModule } from '@angular/common';
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
import { MatRippleModule } from '@angular/material/core';
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

// Components
import { AlertComponent } from './components/alert/alert.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ButtonComponent } from './components/button/button.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { ExpansionPanelTitleComponent } from './components/expansion-panel/expansion-panel-title/expansion-panel-title.component';
import { ExpansionPanelDescriptionComponent } from './components/expansion-panel/expansion-panel-description/expansion-panel-description.component';
import { ExpansionPanelContentComponent } from './components/expansion-panel/expansion-panel-content/expansion-panel-content.component';

import { RadioComponent } from './components/radio/radio.component';

//Pipes
import { InitialLetterPipe } from './pipes/initial-letter.pipe';

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
  MatTooltipModule,
];

@NgModule({
  declarations: [
    // Components
    AlertComponent,
    AvatarComponent,
    ButtonComponent,
    ExpansionPanelComponent,
    ExpansionPanelTitleComponent,
    ExpansionPanelDescriptionComponent,
    ExpansionPanelContentComponent,
    RadioComponent,

    // Pipes
    InitialLetterPipe,
  ],
  imports: [
    CommonModule,
    // Materials
    materialModules,
  ],
  exports: [
    // Components
    AlertComponent,
    AvatarComponent,
    ButtonComponent,
    ExpansionPanelComponent,
    ExpansionPanelTitleComponent,
    ExpansionPanelDescriptionComponent,
    ExpansionPanelContentComponent,
    RadioComponent,

    // Pipes
    InitialLetterPipe,
  ],
})
export class RilkeUiModule {}
