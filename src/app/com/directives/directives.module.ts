import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RbacAllowDirective} from '@app/com/directives/rbac-allow.directive';
import {HighlightedDirective} from '@app/com/directives/highlighted.directive';
import {DigiMaskDirective} from '@app/com/directives/digi-mask.directive';
import {SaveValueDirective} from '@app/com/directives/save-value.directive';
import { IsMobileDirective } from './is-mobile.directive';



@NgModule({
  exports: [
    RbacAllowDirective,
    HighlightedDirective,
    DigiMaskDirective,
    SaveValueDirective,
    IsMobileDirective
  ],
  declarations: [
    RbacAllowDirective,
    HighlightedDirective,
    DigiMaskDirective,
    SaveValueDirective,
    IsMobileDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
