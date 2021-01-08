import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { UserService } from 'src/app/modules/auth/resources/services/user.service';



@Injectable()
export class AuthEffects {

constructor(private actions$: Actions , private userService : UserService) {}

  // loadAuths$ = createEffect(() => {
  //   return this.actions$.pipe( 

  //     ofType(AuthActions.loadAuths),
  //     concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //       EMPTY.pipe(
  //         map(data => AuthActions.loadAuthsSuccess({ data })),
  //         catchError(error => of(AuthActions.loadAuthsFailure({ error }))))
  //     )
  //   );
  // });

  // by myself


  registerEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AuthActions.registerPage),

        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        mergeMap((action) => {
          return this.userService.register(action.user).pipe(map((data) => {
            const user = { ...action.user , name : data.name }
            return AuthActions.registerSuccess({user})
          }))
        }));
  });


}
