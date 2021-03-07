export const FORGOT_LOADING = 'FORGOT/LOADING';
export const FORGOT_ERROR = 'FORGOT/ERROR';
export const FORGOT_SUCCESS = 'FORGOT/SUCCESS';

export type IForgotActions =
   | ReturnType<typeof seForgotSuccess>
   | ReturnType<typeof setForgotError>
   | ReturnType<typeof setForgotLoading>;


export const seForgotSuccess = (isSuccess: boolean) => ({
   type: FORGOT_SUCCESS,
   payload: {isSuccess}
} as const);

export const setForgotError = (error: string | null) => ({
   type: FORGOT_ERROR,
   payload: {error}
} as const);

export const setForgotLoading = (isLoading: boolean) => ({
   type: FORGOT_LOADING,
   payload: {isLoading}
} as const);

