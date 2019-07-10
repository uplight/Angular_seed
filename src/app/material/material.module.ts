import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatCheckboxModule} from '@angular/material';
import {ProfileFormComponent} from '@app/material/profile-form/profile-form.component';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatCardModule,
    ProfileFormComponent
  ],

  declarations: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule
  ]
})
export class MaterialModule { }
