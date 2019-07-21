import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';
import {MatListModule} from '@angular/material';



@NgModule({
  exports: [
    SettingsPanelComponent
  ],
  declarations: [SettingsPanelComponent],
  imports: [
    CommonModule,
    MatListModule
  ]
})
export class SettingsModule { }
