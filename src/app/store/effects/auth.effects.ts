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
          console.log(action , "pure action")
          console.log(action.user , "pure action.user")

          return this.userService.register(action.user).pipe(map((data) => {

            console.log(data , "pure data")

            // const user = { ...action.user , name : "hahah" }
            
            // console.log(user , "pure user") ;
            return AuthActions.registerSuccess(data)
            // return console.log(action);
          }))
        }));
  });


  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AuthActions.loginModal),
        mergeMap((action) =>
        {
          // console.log(action)
          // console.log(action.email , action.password)
          const login = {
              email : action.email,
              password : action.password
          }
          return this.userService.userLogin(login).pipe(
          
            map(data => 
             { 
               
              localStorage.setItem('user', JSON.stringify(data["_id"]))
              console.log(data , "from map")
               return AuthActions.loginSuccess({user : data})

            }
              ),
            catchError(error => 
             {
              console.log(error , "from catch");
               
              return  of(AuthActions.loginFailure({ err : error }))}
              
              )
              )
          
        }
          ),
    );
  });

}
