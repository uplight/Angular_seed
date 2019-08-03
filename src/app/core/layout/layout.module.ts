import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import {RouterModule} from '@angular/router';

import {NavModule} from '@app/core/layout/nav/nav.module';
import {MaterialAppModule} from '@app/material/material-app.module';
import {MaterialMatModule} from '@app/material/material-mat.module';
import {MaterialSdkModule} from '@app/material/material-sdk.module';


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
   MaterialAppModule,
    MaterialMatModule,
    MaterialSdkModule,
    NavModule
  ]
})
export class LayoutModule { }
