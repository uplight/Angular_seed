import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressFormComponent} from '@app/app-forms/address-form/address-form.component';
import {MaterialAppModule} from '@app/material/material-app.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialMatModule} from '@app/material/material-mat.module';



@NgModule({
  exports: [
    AddressFormComponent
  ],
  declarations: [AddressFormComponent],
  imports: [
    CommonModule,
    MaterialAppModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialMatModule
  ]
})
export class AppFormsModule { }
