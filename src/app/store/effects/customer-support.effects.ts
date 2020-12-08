import { Injectable } from '@angular/core';
import { Actions, createEffect , ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { sendingCustomerSupportMessage, sendMsgStatus } from '../actions/customer-support.actions';



@Injectable()
export class CustomerSupportEffects {

  sendMessage$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(sendingCustomerSupportMessage),
        mergeMap((action) =>
          this.apiService.confirmfunction(action.data).pipe(
            map(bool => sendMsgStatus({ isSentSuccess : bool })),
            )
          ),
    );
  });


  constructor(
    private actions$: Actions ,
    private apiService : ApiService
    ) {}

}
