import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatListModule,
  MatTableModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatStepperModule,
  MatRadioModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatSnackBarModule,
  MatChipsModule
} from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatChipsModule,
    FontAwesomeModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatStepperModule,
    MatRadioModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatChipsModule,
    FontAwesomeModule
  ]
})
export class UIThemeModule {
  constructor() {
    library.add(faGithub);
  }
}
