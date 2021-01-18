import {  createReducer, on } from '@ngrx/store';
import { clearForm, sendingCustomerSupportMessage, sendMsgStatus } from '../actions/customer-support.actions';


export const customerSupportFeatureKey = 'customerSupport';

export interface State {
  name : string  | null,
  isSentSuccess : boolean | null
}

export const initialState: State = {
  name : null,
  isSentSuccess : null
};


export const reducer = createReducer(
  initialState,
  on(sendingCustomerSupportMessage , (state , action) => {
    return {
      ...state ,
      name : action.data.name
    }
  }),

  on(sendMsgStatus , (state , action) => {
    return {
      ...state ,
      isSentSuccess : action.isSentSuccess,
    }
  }),
  on(clearForm , (state) => {
    return {
      ...state ,
      name: null,
      isSentSuccess : null,
    }
  })
);

