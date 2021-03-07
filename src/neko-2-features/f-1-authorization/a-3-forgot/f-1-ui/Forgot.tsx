import React from 'react';
import classes from './Forgot.module.css';
import SuperInputText from '../../../../neko-1-main/m-1-ui/u1-common/components/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../../neko-1-main/m-1-ui/u1-common/components/c2-SuperButton/SuperButton';
import { NavLink } from 'react-router-dom';
import {SIGN_IN_PATH} from '../../../../neko-1-main/m-1-ui/Routes';

interface IForgotProps {

}

const Forgot: React.FC<IForgotProps> = (
    {

    }
) => {
    console.log('render Forgot');

    return (
        <div className={classes.container}>
            <div className={classes.forgotEmail}>
               <SuperInputText type={'email'}
                               name={'email'}
                               className={classes.forgotInput} placeholder='Enter your email:'/>
            </div>
           <div>
              <SuperButton variant={'primary'} size={'large'}>send</SuperButton>
           </div>
           <div className={classes.link}>
              <NavLink to={SIGN_IN_PATH}>login</NavLink>
           </div>
        </div>
    );
};

export default Forgot;
