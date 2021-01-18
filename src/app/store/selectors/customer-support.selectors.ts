import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customerSupportFeatureKey, State } from '../reducers/customer-support.reducer';


export const selectCustomerSupportFeature = createFeatureSelector<State>(
    customerSupportFeatureKey
);
export interface CustomerSupportViewModel{
    name : string | null,
    isSentSuccess : boolean | null
}

export const selectCustomerSupportModel = createSelector(
    selectCustomerSupportFeature,
    (state: State) : CustomerSupportViewModel => {
        return {
           name : state.name,
           isSentSuccess : state.isSentSuccess
        }
    }
);