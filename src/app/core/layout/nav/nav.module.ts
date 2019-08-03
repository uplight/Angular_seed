import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavTreeComponent } from './nav-tree/nav-tree.component';
import {MaterialSdkModule} from '@app/material/material-sdk.module';
import {MaterialMatModule} from '@app/material/material-mat.module';


@NgModule({
  exports: [NavTreeComponent],
  declarations: [NavTreeComponent],
  imports: [
    CommonModule,
    MaterialSdkModule,
    MaterialMatModule
  ]
})
export class NavModule { }
