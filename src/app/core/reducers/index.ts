import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {routerReducer} from '@ngrx/router-store';

export interface AppState {
  router: any;
}


export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer

};




export const metaReducers: MetaReducer<AppState>[] = [];

