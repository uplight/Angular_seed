import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {RouterModule} from '@angular/router';

import {NavModule} from '@app/core/layout/nav/nav.module';
import {MaterialAppModule} from '@app/material/material-app.module';
import {MaterialMatModule} from '@app/material/material-mat.module';
import {MaterialSdkModule} from '@app/material/material-sdk.module';
import {PageNotFoundComponent} from '@app/core/layout/page-not-found/page-not-found.component';
import {LandingPageComponent} from '@app/core/layout/landing-page/landing-page.component';



@NgModule({
  exports: [
    ToolbarComponent,
    PageNotFoundComponent,
    LandingPageComponent,
    ToolbarComponent,
    NavModule
  ],
  declarations: [
    ToolbarComponent,
    PageNotFoundComponent,
    LandingPageComponent,
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
