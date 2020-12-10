import { createAction, props } from '@ngrx/store';
import { CustomerMessage } from 'src/app/shared/models/customer-message';

export const sendingCustomerSupportMessage = createAction(
  '[CustomerSupport component] sending CustomerSupport message',
  props<{ data: CustomerMessage }>()
);


export const sendMsgStatus = createAction(
  '[CustomerSupport effect] send CustomerSupport message status',
  props<{ isSentSuccess: boolean }>()
);


export const clearForm = createAction(
  '[customerSupport component] clear Form'
  );