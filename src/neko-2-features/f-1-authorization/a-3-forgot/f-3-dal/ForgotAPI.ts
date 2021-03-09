import {instance} from '../../../../base-url';

export const ForgotAPI = {
   forgotPassword: (email: string) => {
      return instance.post<ResponseForgotPasswordType>('/auth/forgot', {
            email,
            from: 'front-admin <serhioromanchuk@gmail.com>',
            message: `<div style="background-color: lime; padding: 15px">	
	                         password recovery link: 		
	                         <a href='https://borec22.github.io/cards-ts/#/set-new-password/$token$'>link</a>
	                      </div>`

         }
      ).then(response => response.data);
   }
}


// types
type ResponseForgotPasswordType = {
   info: string,
   success: boolean,
   answer: boolean,
   html: boolean
}

export type ResponseErrorForgotPasswordType = {
   "error": string,
   "body": boolean,
   "in": string
}
