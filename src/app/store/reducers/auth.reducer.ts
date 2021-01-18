import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { initialState } from "../states/auth.states";
export const authFeatureKey = 'auth';




export const reducer = createReducer(
  initialState,
  on(AuthActions.registerSuccess, (state, action) => {
    return {
      ...state,
      user : action.user,
      err : null
    }
    
  }),
  on(AuthActions.registerFailure, (state, action) => {
    return {
      ...state,
      user : {
        _id : null,
        username : null,
        email : null,
        password : null ,
        gender : null ,
        user_role : null,
        isAdmin : null
      },
      err : action.err
    }
  }),
  on(AuthActions.loginSuccess ,AuthActions.browserReload, (state , action) => {
    return {
      ...state,
      user : action.user,
      err : null
    }
  }),
  on(AuthActions.loginFailure , (state , action) => {
    return {
      ...state,
      user : {
        _id : null,
        username : null,
        email : null,
        password : null ,
        gender : null ,
        user_role : null,
        isAdmin : null
      },
      err : action.err
    }
  }),
  on(AuthActions.logout , (state , action) => {
    return {
      ...state,
      user : {
        _id : null,
        username : null,
        email : null,
        password : null ,
        gender : null ,
        user_role : null,
        isAdmin : null
      },
      err : null
    }
  })




);

