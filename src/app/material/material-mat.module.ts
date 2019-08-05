import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatListModule,
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
    MatTableModule
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
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
    MatTableModule
  ]
})
export class MaterialMatModule { }
