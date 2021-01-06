import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/models/user';

export const loadAuths = createAction(
  '[Auth] Load Auths'
);

export const loadAuthsSuccess = createAction(
  '[Auth] Load Auths Success',
  props<{ data: any }>()
);

export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);


//login modal

export const loginModal = createAction(
  '[Login Modal Component] Login User',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);


// register componet 
export const registerPage = createAction(
  '[register Component] register User',
  props<{ user: User }>()
);

export const registerSuccess = createAction(
  '[Auth Effect] register User Success',
  props<{ user: User }>()
);

export const registerFailure = createAction(
  '[Auth Effect] register User Failure',
  props<{ error: any }>()
);

// logout 
export const logout = createAction('[Auth Links Component] Logout User');



// browser reload
export const browserReload = createAction(
  '[Core Component] Browser Reload',
  props<{ user: User }>()
);