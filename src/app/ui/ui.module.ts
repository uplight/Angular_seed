import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileFormComponent} from './profile-form/profile-form.component';
import {MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  exports: [
    ProfileFormComponent
  ],
  declarations: [ProfileFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class UiModule {
}
