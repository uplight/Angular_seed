import {Action} from '@ngrx/store';
import {VOProduct} from '@product/models/product.model';

export enum ProductActionTypes {
  ProductRequested = '[View Product] Product Requested',
  ProductLoaded = '[Product API] Product Loaded',
  AllProductsRequested = '[AllProductView] All Products Requested',
  AllProductsLoaded = '[Product API] All Products Loaded'
}



export class ProductRequested implements Action {

  readonly type = ProductActionTypes.ProductRequested;

  constructor(public payload: { productId: number }) {
  }

}

export class ProductLoaded implements Action {

  readonly type = ProductActionTypes.ProductLoaded;

  constructor(public payload: { product: VOProduct }) {
  }

}


export class AllProductsRequested implements Action {

  readonly type = ProductActionTypes.AllProductsRequested;

  constructor() {
  }

}


export class AllProductsLoaded implements Action {

  readonly type = ProductActionTypes.AllProductsLoaded;

  constructor(public payload: { products: VOProduct[] }) {
  }

}


export type ProductActions = ProductRequested
  | ProductLoaded
  | AllProductsRequested
  | AllProductsLoaded

