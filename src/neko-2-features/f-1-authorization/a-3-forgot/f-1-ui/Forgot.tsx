import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import classes from './Forgot.module.css';
import SuperInputText from '../../../../neko-1-main/m-1-ui/u1-common/components/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../../neko-1-main/m-1-ui/u1-common/components/c2-SuperButton/SuperButton';
import {NavLink} from 'react-router-dom';
import {SIGN_IN_PATH} from '../../../../neko-1-main/m-1-ui/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {IAppStore} from '../../../../neko-1-main/m-2-bll/store';
import {forgotPassword} from '../f-2-bll/forgotThunk';
import {seForgotSuccess} from '../f-2-bll/b-2-redux/forgotActions';

interface IForgotProps {

}

const Forgot: React.FC<IForgotProps> = (
   {}
) => {
   const [email, setEmail] = useState<string>('');
   console.log('render Forgot');
   const dispatch = useDispatch();
   const isSuccess = useSelector<IAppStore, boolean>(state => state.forgot.isSuccess);
   const isLoading = useSelector<IAppStore, boolean>(state => state.forgot.isLoading);
   const error = useSelector<IAppStore, string | null>(state => state.forgot.error);

   useEffect(() => {

      return () => {
         dispatch(seForgotSuccess(false));
      }
   }, []);


   const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.currentTarget.value);
   }

   const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
      dispatch(forgotPassword(email));
   }

   return (
      <div className={classes.container}>
         {isSuccess ?
            <div>
               <p className={classes.success}>Success!</p>
               <p>click the link in the message in your email</p>
            </div> :

            <>
               {error && <div className={classes.error}>{error}</div>}
               {isLoading && <div className={classes.preloader}>in progress...</div>}
               <div className={classes.forgotEmail}>
                  <SuperInputText type={'email'}
                                  name={'email'}
                                  value={email}
                                  onChange={changeEmailHandler}
                                  className={classes.forgotInput} placeholder='Enter your email:'
                  />
               </div>
               <div>
                  <SuperButton variant={'primary'} size={'large'} onClick={submitHandler}>send</SuperButton>
               </div>
            </>
         }
         <div className={classes.link}>
            <NavLink to={SIGN_IN_PATH}>login</NavLink>
         </div>
      </div>
   );
};

export default Forgot;
