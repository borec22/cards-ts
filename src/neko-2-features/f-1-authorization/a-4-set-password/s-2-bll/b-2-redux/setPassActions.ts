export const SET_PASS_LOADING = 'SET_PASS/LOADING';
export const SET_PASS_ERROR = 'SET_PASS/ERROR';
export const SET_PASS_SUCCESS = 'SET_PASS/SUCCESS';


export type ISetPassActions =
   | ReturnType<typeof setNewPasswordSuccess>
   | ReturnType<typeof setNewPasswordError>
   | ReturnType<typeof setNewPasswordLoading>


export const setNewPasswordSuccess = (isSuccess: boolean) => ({
   type: SET_PASS_SUCCESS,
   payload: {isSuccess}
} as const);

export const setNewPasswordError = (error: string | null) => ({
   type: SET_PASS_ERROR,
   payload: {error}
} as const);

export const setNewPasswordLoading = (isLoading: boolean) => ({
   type: SET_PASS_LOADING,
   payload: {isLoading}
} as const);

