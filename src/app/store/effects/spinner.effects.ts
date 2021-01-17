import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions'


@Injectable()
export class SpinnerEffects {

  constructor(private actions$: Actions , private spinner : NgxSpinnerService ) {}

  spinnerOn$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromAuthAction.loginModal ),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        tap(() => this.spinner.show()));
  },
  {dispatch : false}

  );
  spinnerOff$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(fromAuthAction.registerFailure , fromAuthAction.registerSuccess , fromAuthAction.loginFailure , fromAuthAction.loginSuccess ),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        tap(() => this.spinner.hide()));
  },
  {dispatch : false}

  );


}
