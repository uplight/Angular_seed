import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {PipesModule} from '@app/com/pipes/pipes.module';

@NgModule({
  declarations: [AdminEntryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DirectivesModule,
    PipesModule
  ]
})

export class AdminModule { }
