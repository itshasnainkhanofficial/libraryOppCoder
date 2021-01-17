import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/models/user';
import { loginInterface } from "src/app/modules/auth/resources/models/login";


//login modal

export const loginModal = createAction(
  '[Login Modal Component] Login User',
  // props<{ loginData : loginInterface}>()
  props<{ email : string , password : string}>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ err: any }>()
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
  props<{ err: any }>()
);

// logout 
export const logout = createAction('[Auth Links Component] Logout User');



// browser reload
export const browserReload = createAction(
  '[Core Component] Browser Reload',
  props<{ user: User }>()
);