/*
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPage} from '@product/pages/product/product.page';
import {productsReducers} from '@product/store/products.reducers';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from '@product/store/products.effects';
import {ProductStoreComponent} from './pages/product-store/product-store.component';
import {WidgetsModule} from '@app/widgets/widgets.module';
import {MaterialModule} from '@app/material/material.module';
import { ProductContentComponent } from './pages/product/product-content/product-content.component';
import {CommonModule} from '@angular/common';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {DirectivesModule} from '@app/com/directives/directives.module';


export const productRoutes: Routes = [
  {
    path: ':id',
    component: ProductPage
  },
  {
    path: 'store/:id',
    component: ProductStoreComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    WidgetsModule,
    MaterialModule,
    RouterModule.forChild(productRoutes)
  ],
  exports: [
    ProductPage
  ],
  declarations: [
    ProductPage,
    ProductStoreComponent,
    ProductContentComponent
  ]
})
export class ProductModule {
}
*/
