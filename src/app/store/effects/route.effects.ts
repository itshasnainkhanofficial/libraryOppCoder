import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import * as fromAuthAction from '../actions/auth.actions'



@Injectable()
export class RouteEffects {



  constructor(private actions$: Actions, private route: Router) {}

  registertohome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthAction.registerSuccess),
        tap(() => this.route.navigate(['/home']))
      ),
    { dispatch: false }
  );

}
