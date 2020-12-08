import { Action, createReducer, on } from '@ngrx/store';
import { CustomerMessage } from 'src/app/shared/models/customer-message';
import { sendingCustomerSupportMessage, 
  sendMsgStatus 
} from '../actions/customer-support.actions';


export const customerSupportFeatureKey = 'customerSupport';

export interface State {
  name : string ,
  isSentSuccess : boolean | null
}

export const initialState: State = {
  name : "",
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
  })
);

