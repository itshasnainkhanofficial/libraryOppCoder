import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromAuthActions from '../actions/auth.actions';
import { from } from 'rxjs';
import { ModalService } from 'src/app/shared/modal.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ModalEffects {
  hideModal$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap(() => {
            this.route.navigate(['/home'])
            this.modalService.hide()
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, private modalService: ModalService , private route : Router) {}
}