import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { initialState } from "../states/auth.states";
export const authFeatureKey = 'auth';




export const reducer = createReducer(
  initialState,
  // on(AuthActions.registerPage, (state, action) => {
  //   return {
  //     ...state,
  //     user : action.user
  //   }
    
  // })
  on(AuthActions.loginSuccess , (state , action) => {
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
        id : null,
        username : null,
        email : null,
        password : null ,
        gender : null ,
        user_role : null,
        isAdmin : null
      },
      err : action.err
    }
  })




);

