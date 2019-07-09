import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatCardModule
  ],

  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule
  ]
})
export class MaterialModule { }
