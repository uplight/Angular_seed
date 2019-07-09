import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {VOProduct} from '@product/models/product.model';
import {ProductActions, ProductActionTypes} from '@product/store/products.actions';

export interface ProductsState extends EntityState<VOProduct> {
  productsLoaded: boolean

}

export const adapter: EntityAdapter<VOProduct> = createEntityAdapter<VOProduct>();


export const initialProductsState: ProductsState = adapter.getInitialState({
  productsLoaded: false
});


export function productsReducers(state: ProductsState = initialProductsState, action: ProductActions) {


  switch (action.type) {
    case ProductActionTypes.ProductLoaded :
      return adapter.addOne(action.payload.product, state);
    case ProductActionTypes.AllProductsLoaded :
      return adapter.addAll(action.payload.products, {...state, productsLoaded: true});
    default:
      return state;


  }

}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
