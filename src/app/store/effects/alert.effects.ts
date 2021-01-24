import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions'



@Injectable()
export class AlertEffects {



  constructor(private actions$: Actions , private alertService : AlertService) {}

  checkingYourInformation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.loginModal, fromAuthAction.registerPage),
        tap(() => this.alertService.info('Checking your information'))
      ),
    { dispatch: false }
  );

  welcomeLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.loginSuccess),
        tap((action) =>
          {
            this.alertService.success(
            
              'Welcome back ' + action.user.username + ' !'
            )
          }
        )
      ),
    { dispatch: false }
  );

  welcomeRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.registerSuccess),
        tap((action) =>
          {
  
            this.alertService.success(
            
              'Welcome  ' + action.user.username + ' !'
            )
          }
        )
      ),
    { dispatch: false }
  );

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.loginFailure ),
        tap((action) => {
          console.log(action.err.error.text)
          this.alertService.danger(`Unable to login ${action.err.error.text}`)
        }
        
        )
      ),
    { dispatch: false }
  );

  unableToRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.registerFailure),
        tap((action) => {
          // console.log(action.err , "from register error")
          // this.alertService.danger(`Unable to register ${action.err.error.text}`)
          this.alertService.danger(`Unable to register ${action.err}`)
        })
      ),
    { dispatch: false }
  );

  logoutEffectAlert$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.logout),
        tap(() => {
          
          this.alertService.danger(`Logout Successfully`)
        })
      ),
    { dispatch: false }
  );

}
