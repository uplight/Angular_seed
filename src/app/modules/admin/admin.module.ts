import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminEntryComponent } from './admin-entry/admin-entry.component';

@NgModule({
  declarations: [AdminEntryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})

export class AdminModule { }
