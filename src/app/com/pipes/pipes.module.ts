import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RatingPipe} from '@app/com/pipes/rating.pipe';


@NgModule({
  exports: [
    RatingPipe
  ],
  declarations: [
    RatingPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
