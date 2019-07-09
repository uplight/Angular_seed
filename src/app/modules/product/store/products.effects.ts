import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiProductsService} from '@app/core/services/apis/api-products.service';
import {AllProductsLoaded, AllProductsRequested, ProductActionTypes} from '@product/store/products.actions';
import {map, mergeMap} from 'rxjs/operators';
import {VOProduct} from '@product/models/product.model';

@Injectable()
export class ProductsEffects {
  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType<AllProductsRequested>(ProductActionTypes.AllProductsRequested),
    mergeMap(action => this.apiProducts.downloadProducts()),
    map((products: VOProduct[]) => new AllProductsLoaded({products}))
  )
  constructor(private actions$: Actions, private apiProducts: ApiProductsService) {

  }
}

