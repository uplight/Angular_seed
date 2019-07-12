import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsPanelComponent } from './settings-panel/settings-panel.component';



@NgModule({
  exports: [
    SettingsPanelComponent
  ],
  declarations: [SettingsPanelComponent],
  imports: [
    CommonModule
  ]
})
export class SettingsModule { }
