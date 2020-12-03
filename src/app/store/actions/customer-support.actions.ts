import { createAction, props } from '@ngrx/store';
import { CustomerMessage } from 'src/app/shared/models/customer-message';

export const loadCustomerSupports = createAction(
  '[CustomerSupport] Load CustomerSupports'
);

export const loadCustomerSupportsSuccess = createAction(
  '[CustomerSupport] Load CustomerSupports Success',
  props<{ data: any }>()
);

export const loadCustomerSupportsFailure = createAction(
  '[CustomerSupport] Load CustomerSupports Failure',
  props<{ error: any }>()
);


export const sendingCustomerSupportMessage = createAction(
  '[CustomerSupport component] sending CustomerSupport message',
  props<{ data: CustomerMessage }>()
);