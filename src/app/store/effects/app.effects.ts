import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { tap } from 'rxjs/operators';
import * as fromAuthAction from "../actions/auth.actions";

@Injectable()
export class AppEffects {



  constructor(private actions$: Actions) {}



  addusertolocalstore$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromAuthAction.loginSuccess , fromAuthAction.registerSuccess),
        
        tap((action) => localStorage.setItem('user', JSON.stringify(action.user)))
        );

      },

      {dispatch : false}
  
  );
  removeuserfromlocalstore$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromAuthAction.logout),
        
        tap(() => localStorage.removeItem('user'))
        );

      },

      {dispatch : false}
  
  );

}
