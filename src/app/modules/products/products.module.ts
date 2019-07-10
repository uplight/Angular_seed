/*
import {NgModule} from '@angular/core';
import {ProductsPage} from '@products/pages/products/products.page';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {productsReducers} from '@product/store/products.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from '@product/store/products.effects';
import {CommonModule} from '@angular/common';
import {PipesModule} from '@app/com/pipes/pipes.module';
import {WidgetsModule} from '@app/widgets/widgets.module';
import {MaterialModule} from '@app/material/material.module';
import {DirectivesModule} from '@app/com/directives/directives.module';

export const isProductsExists = () => {

}
export const productsRoutes: Routes = [
    {
        path: '',
        component: ProductsPage,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    WidgetsModule,
    MaterialModule,
    RouterModule.forChild(productsRoutes),
    ProductModule,
  ],
    declarations: [
        ProductsPage
    ]
})
export class ProductsModule { }
*/
