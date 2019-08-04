
import {ComponentFactory, ComponentFactoryResolver, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {CommonModule} from '@angular/common';

import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {AuthGuard} from '@app/features/auth/auth.guard';
import { CoreEntryComponent } from './core-entry/core-entry.component';

import {SettingsModule} from '@app/core/layout/settings/settings.module';

import {MatButtonModule} from '@angular/material';

import {LayoutModule} from '@app/core/layout/layout.module';
import {AdminEntryComponent} from '@app/features/admin/admin-entry/admin-entry.component';
import {AdminModule} from '@app/features/admin/admin.module';
import {MaterialMatModule} from '@app/material/material-mat.module';
import {MaterialSdkModule} from '@app/material/material-sdk.module';
import {MaterialAppModule} from '@app/material/material-app.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PipesModule,
    DirectivesModule,
   MaterialMatModule,
    MaterialSdkModule,
    MaterialAppModule,
    SettingsModule,
    LayoutModule,
    AdminModule,
  ],
  exports: [
    PipesModule,
    DirectivesModule,
    HttpClientModule
  ],
  providers: [],
  declarations: [
  ],
  entryComponents: [

  ]
})

export class CoreModule {

}


