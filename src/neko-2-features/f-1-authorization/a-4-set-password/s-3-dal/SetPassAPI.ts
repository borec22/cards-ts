import {instance} from '../../../../base-url';

export const SetPassAPI = {
   setPassword(password: string, token: string) {
      return instance.post<ResponseSetPasswordType>(`auth/set-new-password`, {
         'password': password,
         'resetPasswordToken': token
      })
         .then(response => response.data)
   }
}

// types
type ResponseSetPasswordType = {
   'error': string
   'method': string
   'url': string
   'query': Object
   'body': {
      'password': string
      'resetPasswordToken': string
   }
}

export type ResponseErrorSetPasswordType = {
   "error": string,
   "body": boolean,
   "in": string
}


// serhioromanchuk@gmail.com
// aezakmi22
// qazwsx123
