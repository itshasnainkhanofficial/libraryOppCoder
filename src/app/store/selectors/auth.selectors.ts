import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import { AuthState } from "../states/auth.states";

export const selectAuthState = createFeatureSelector<AuthState>(
  fromAuth.authFeatureKey
);

export interface AuthLinkViewModal {
  user_role : number,
  isLoggedIn : boolean,
  username : string
}



export const selectIsLoggedIn = createSelector(
  selectAuthState,
  (state: AuthState) : boolean => state.user._id != null
);

export const selectName = createSelector(
  selectAuthState,
  (state: AuthState) : string => state.user.username
);
export const selectRole = createSelector(
  selectAuthState,
  (state: AuthState) : number => state.user.user_role
);


export const selectAuthLinkViewModal = createSelector(
  
  [selectAuthState , selectIsLoggedIn, selectName , selectRole],
  
  (state : AuthState , isLoggedIn : boolean , name : string , role : number) : AuthLinkViewModal => {
    // console.log(state , "from selector")
    return {
      user_role : role,
      isLoggedIn : isLoggedIn,
      username : name
    }
  }
)