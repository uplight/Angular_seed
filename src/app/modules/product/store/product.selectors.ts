import {ProductsState} from '@product/store/products.reducers';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromProduct from './products.reducers';
export const selectProductsState = createFeatureSelector<ProductsState>('products');



export const selectProductById = (productId: string) => createSelector(
  selectProductsState,
  productState => {
    return productState.entities[productId]
  }
);


export const selectAllProducts = createSelector(
  selectProductsState,
  fromProduct.selectAll
);
