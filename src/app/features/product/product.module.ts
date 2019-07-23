import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '@app/material/material.module';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';
import {MatInputModule} from '@angular/material';
import {UiModule} from '@app/ui/ui.module';
import {WidgetsModule} from '@app/widgets/widgets.module';
import {productRoutes} from '@app/features/product/product-routes';


@NgModule({
  declarations: [
    ProductComponent,
    ProductEntryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    DirectivesModule,
    RouterModule.forChild(productRoutes),
    MatInputModule,
    UiModule,
    WidgetsModule
  ]
})
export class ProductModule {
  constructor() {
   // console.warn(' ProductModule')
  }
}
