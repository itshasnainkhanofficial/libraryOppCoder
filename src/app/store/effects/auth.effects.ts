import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { UserService } from 'src/app/modules/auth/resources/services/user.service';



@Injectable()
export class AuthEffects {

constructor(private actions$: Actions , private userService : UserService) {}




  registerEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AuthActions.registerPage),

        
        mergeMap((action) => {


          return this.userService.register(action.user).pipe(map((data) => {

            
            return AuthActions.registerSuccess({user : data})
            
          }),
          catchError(error => 
            {
             
              
             return  of(AuthActions.registerFailure({ err : error }))}
             
             )
          
          )
        }));
  });


  loginEffect$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(AuthActions.loginModal),
        mergeMap((action) =>
        {

          const login = {
              email : action.email,
              password : action.password
          }
          return this.userService.userLogin(login).pipe(
          
            map(data => 
             { 
               
        
              
               return AuthActions.loginSuccess({user : data})

            }
              ),
            catchError(error => 
             {
              
               
              return  of(AuthActions.loginFailure({ err : error }))}
              
              )
              )
          
        }
          ),
    );
  });

}
