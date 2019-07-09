import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingPipe} from './rating.pipe';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule} from '@angular/material';
import {StoreModule} from '@ngrx/store';
import {productsReducers} from '@product/store/products.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from '@product/store/products.effects';
import { RbacAllowDirective } from './directives/rbac-allow.directive';
import { HighlightedDirective } from './directives/highlighted.directive';
import { DigiMaskDirective } from './directives/digi-mask.directive';
import {SaveValueDirective} from '@shared/directives/save-value.directive';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    RatingPipe,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    RbacAllowDirective,
    HighlightedDirective,
    DigiMaskDirective,
    SaveValueDirective

  ],
  declarations: [
    RatingPipe,
    RbacAllowDirective,
    HighlightedDirective,
    DigiMaskDirective,
    SaveValueDirective
  ]
})
export class SharedModule {
}

// TODOM - IMPORT this Module into the required Module
// TODOM - CONFIGURE the root routes to create lazy loading
// TODOM - CONFIGURE sharedRoutes and the routerLink to navigate to the route
// TODOM - CONFIGURE RouterModule
// TODOM - ADD reducer file
// TODOM - CONFIGURE StoreModule with new reducer
// TODOM - ADD actions for new reducer
// TODOM - ADD effects (if needed)
