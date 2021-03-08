export interface ISetPassState {
   isSuccess: boolean
   error: string | null
   isLoading: boolean
}

export const setPassInitialState: ISetPassState = {
   isSuccess: false,
   error: null,
   isLoading: false
};
