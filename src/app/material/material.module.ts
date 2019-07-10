import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatRadioModule, MatSelectModule} from '@angular/material';
import {ProfileFormComponent} from '@app/material/profile-form/profile-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatCardModule,
    ProfileFormComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],

  declarations: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule
  ]
})
export class MaterialModule { }
