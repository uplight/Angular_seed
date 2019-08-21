import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTreeModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatTreeModule,
    MatTabsModule,
    MatTableModule,
    MatAutocompleteModule
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatTreeModule,
    MatTabsModule,
    MatTableModule,
    MatAutocompleteModule
  ]
})
export class MaterialMatModule { }
