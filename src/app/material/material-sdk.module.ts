import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTreeModule} from '@angular/cdk/tree';


@NgModule({
  exports: [
    CdkTreeModule
  ],
  imports: [
    CommonModule,
    CdkTreeModule
  ]
})
export class MaterialSdkModule { }
