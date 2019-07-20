import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@app/material/material.module';
import {SettingsModule} from '@app/core/settings/settings.module';



@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SettingsModule
  ],
  exports: [
    NavMenuComponent
  ]
})
export class MenuModule { }
