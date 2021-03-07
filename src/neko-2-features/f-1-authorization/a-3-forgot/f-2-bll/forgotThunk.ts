import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {IAppStore} from '../../../../neko-1-main/m-2-bll/store';
import {seForgotSuccess, IForgotActions, setForgotError, setForgotLoading} from './b-2-redux/forgotActions';
import {ForgotAPI} from '../f-3-dal/ForgotAPI';

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const forgotPassword = (email: string): ThunkAction<Return, IAppStore, ExtraArgument, IForgotActions> =>
   async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, IForgotActions>, getStore: IGetStore) => {
      try {
         dispatch(setForgotError(null));
         dispatch(setForgotLoading(true));
         let data = await ForgotAPI.forgotPassword(email);

         if (data.success) {
            dispatch(setForgotLoading(false));
            dispatch(seForgotSuccess(true));
         }
      } catch (error) {
         dispatch(setForgotLoading(false));
         dispatch(setForgotError(error.message));
      }
   };
