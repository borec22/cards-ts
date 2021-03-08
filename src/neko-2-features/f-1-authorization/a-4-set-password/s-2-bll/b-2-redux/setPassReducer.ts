import {setPassInitialState} from './setPassInitialState';
import {ISetPassActions, SET_PASS_ERROR, SET_PASS_LOADING, SET_PASS_SUCCESS} from './setPassActions';
import {FORGOT_ERROR, FORGOT_LOADING, FORGOT_SUCCESS} from '../../../a-3-forgot/f-2-bll/b-2-redux/forgotActions';

export const setPassReducer = (state = setPassInitialState, action: ISetPassActions) => {
   switch (action.type) {
      case SET_PASS_SUCCESS: {
         return { ...state, ...action.payload}
      }

      case SET_PASS_ERROR: {
         return {...state, ...action.payload}
      }

      case SET_PASS_LOADING: {
         return {...state, ...action.payload}
      }

      default: {
         return state;
      }
   }
};
