import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


export interface LibraryState {

}

export const reducers: ActionReducerMap<LibraryState> = {

};


export const metaReducers: MetaReducer<LibraryState>[] = !environment.production ? [] : [];
