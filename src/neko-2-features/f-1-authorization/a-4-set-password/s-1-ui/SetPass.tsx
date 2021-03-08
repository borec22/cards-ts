import React, {ChangeEvent, MouseEvent, useState} from 'react';
import classes from '../../a-3-forgot/f-1-ui/Forgot.module.css';
import SuperInputText from '../../../../neko-1-main/m-1-ui/u1-common/components/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../../neko-1-main/m-1-ui/u1-common/components/c2-SuperButton/SuperButton';
import {NavLink, Redirect, useParams} from 'react-router-dom';
import {SIGN_IN_PATH} from '../../../../neko-1-main/m-1-ui/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {IAppStore} from '../../../../neko-1-main/m-2-bll/store';
import {setNewPasswordError} from '../s-2-bll/b-2-redux/setPassActions';
import {setNewPassword} from '../s-2-bll/setPassThunk';

interface IForgotProps {

}

const SetPass: React.FC<IForgotProps> = (
   {}
   ) => {
      const [firstPassword, setFirstPassword] = useState<string>('');
      const [secondPassword, setSecondPassword] = useState<string>('');
      console.log('render SetPass');

      const dispatch = useDispatch();
      const { token } = useParams<{token?: string}>();
      const params = useParams();

      const isLoading = useSelector<IAppStore, boolean>(state => state.setPass.isLoading);
      const error = useSelector<IAppStore, string | null>(state => state.setPass.error);
      const isSuccess = useSelector<IAppStore, string | boolean>(state => state.setPass.isSuccess);

      const changeFirstPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
         if (error) {
            dispatch(setNewPasswordError(null));
         }

         setFirstPassword(e.currentTarget.value)
      };
      const changeSecondPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
         if (error) {
            dispatch(setNewPasswordError(null));
         }

         setSecondPassword(e.currentTarget.value)
      };

      const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
         if (firstPassword === secondPassword) {
           token && dispatch(setNewPassword(secondPassword, token));
         } else {
            dispatch(setNewPasswordError("Passwords don\'t match!"));
         }
      }

      if (isSuccess) {
         return <Redirect to={SIGN_IN_PATH}/>
      }

      return (
         <div className={classes.container}>
            {error && <div className={classes.error}>{error}</div>}
            {isLoading && <div className={classes.preloader}>in progress...</div>}
            <div className={classes.formControl}>
               <SuperInputText type={'text'}
                               name={'first-password'}
                               value={firstPassword}
                               onChange={changeFirstPasswordHandler}
                               className={classes.forgotInput}
                               placeholder='Password:'
               />
            </div>
            <div className={classes.formControl}>
               <SuperInputText type={'text'}
                               name={'second-password'}
                               value={secondPassword}
                               onChange={changeSecondPasswordHandler}
                               className={classes.forgotInput}
                               placeholder='Confirm password:'
               />
            </div>
            <div>
               <SuperButton variant={'primary'} size={'large'} onClick={submitHandler}>set password</SuperButton>
            </div>

            <div className={classes.link}>
               <NavLink to={SIGN_IN_PATH}>login</NavLink>
            </div>
         </div>
      );
   }
;

export default SetPass;
