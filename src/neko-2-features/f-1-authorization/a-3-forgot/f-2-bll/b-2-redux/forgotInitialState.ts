export interface IForgotState {
   isSuccess: boolean
   error: string | null
   isLoading: boolean
}

export const forgotInitialState: IForgotState = {
   isSuccess: false,
   error: null,
   isLoading: false
};
