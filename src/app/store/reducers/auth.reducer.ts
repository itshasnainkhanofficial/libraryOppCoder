import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  
  username : string,
  email : string,
  password : string ,
  gender : number | null ,
  user_role : number | null
}

export const initialState: State = {

  username : "",
  email : "",
  password : "" ,
  gender : null ,
  user_role : null
};


export const reducer = createReducer(initialState, on(AuthActions.registerPage, (state, action) => {
    // let user = {...action.user} ;
    return {
      ...state,
      user : action.user
    }
    
  })
  // on(AuthActions.loadAuths, state => state),
  // on(AuthActions.loadAuthsSuccess, (state, action) => state),
  // on(AuthActions.loadAuthsFailure, (state, action) => state),


);

