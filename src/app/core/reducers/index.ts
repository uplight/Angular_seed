import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {VOProduct} from '@product/models/product.model';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {ProductActions, ProductActionTypes} from '@product/store/products.actions';
import {routerReducer} from '@ngrx/router-store';


export interface AppState {
  router: any;
}


export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer

};




export const metaReducers: MetaReducer<AppState>[] = [];

