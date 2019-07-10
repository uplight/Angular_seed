import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductEntryComponent } from './product-entry/product-entry.component';
import {RouterModule} from '@angular/router';
import {productRoutes} from '@app/product/product-routes';
import {MaterialModule} from '@app/material/material.module';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';


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
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
