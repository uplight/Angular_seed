import {NgModule} from '@angular/core';
import {ProductsPage} from '@products/pages/products/products.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {ProductModule, productRoutes} from '@product/product.module';
import {StoreModule} from '@ngrx/store';
import {productsReducers} from '@product/store/products.reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from '@product/store/products.effects';

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
    SharedModule,
    RouterModule.forChild(productsRoutes),
    ProductModule,
  ],
    declarations: [
        ProductsPage
    ]
})
export class ProductsModule { }
