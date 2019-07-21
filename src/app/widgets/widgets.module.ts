import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgesComponent } from '../ui/badges/badges.component';
import {MaterialModule} from '@app/material/material.module';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {UiModule} from '@app/ui/ui.module';


@NgModule({
  exports: [

  ],
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    UiModule,
    PipesModule,
    DirectivesModule
  ]
})
export class WidgetsModule { }
