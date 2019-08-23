import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialMatModule} from '@app/material/material-mat.module';


@NgModule({
  exports: [
  ],

  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMatModule
  ]
})
export class MaterialAppModule { }
