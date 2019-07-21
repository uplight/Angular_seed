import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@app/material/material.module';


@NgModule({
  exports: [
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class LayoutModule { }
