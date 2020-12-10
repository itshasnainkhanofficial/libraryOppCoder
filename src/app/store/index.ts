import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCustomerSupport from './reducers/customer-support.reducer';
import * as fromAuth from './reducers/auth.reducer';


export interface LibraryState {

  [fromCustomerSupport.customerSupportFeatureKey]: fromCustomerSupport.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<LibraryState> = {

  [fromCustomerSupport.customerSupportFeatureKey]: fromCustomerSupport.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<LibraryState>[] = !environment.production ? [] : [];
