import {forgotInitialState} from './forgotInitialState';
import {FORGOT_ERROR, FORGOT_LOADING, FORGOT_SUCCESS, IForgotActions} from './forgotActions';

export const forgotReducer = (state = forgotInitialState, action: IForgotActions) => {
    switch (action.type) {
        case FORGOT_SUCCESS: {
            return { ...state, ...action.payload}
        }

       case FORGOT_ERROR: {
          return {...state, ...action.payload}
       }

       case FORGOT_LOADING: {
          return {...state, ...action.payload}
       }

        default: {
            return state;
        }
    }
};
