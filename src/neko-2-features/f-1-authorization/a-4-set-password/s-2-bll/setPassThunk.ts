import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {IAppStore} from '../../../../neko-1-main/m-2-bll/store';
import {
   ISetPassActions,
   setNewPasswordError,
   setNewPasswordLoading,
   setNewPasswordSuccess
} from './b-2-redux/setPassActions';
import {ResponseErrorSetPasswordType, SetPassAPI} from '../s-3-dal/SetPassAPI';
import {ResponseErrorForgotPasswordType} from '../../a-3-forgot/f-3-dal/ForgotAPI';
import {setForgotError, setForgotLoading} from '../../a-3-forgot/f-2-bll/b-2-redux/forgotActions';
//import {setForgotError, setForgotLoading} from '../../a-3-forgot/f-2-bll/b-2-redux/forgotActions';

type Return = void;
type ExtraArgument = {};
type IGetStore = () => IAppStore;

export const setNewPassword = (password: string, token: string): ThunkAction<Return, IAppStore, ExtraArgument, ISetPassActions> =>
    async (dispatch: ThunkDispatch<IAppStore, ExtraArgument, ISetPassActions>, getStore: IGetStore) => {

      try {
         dispatch(setNewPasswordError(null));
         dispatch(setNewPasswordLoading(true));

         const data = await SetPassAPI.setPassword(password, token);

         dispatch(setNewPasswordSuccess(true));

      } catch (error) {
         if (error.response) {
            const data: ResponseErrorSetPasswordType = error.response.data;

            dispatch(setNewPasswordError(data.error));
         } else {
            dispatch(setNewPasswordError(error.message));
         }

      } finally {
         dispatch(setNewPasswordLoading(false));
      }
   };
