import { ActionTypes } from './types';

export interface IsLoadingAction {
    type: ActionTypes.isLoading;
    payload: boolean;
}

export const setIsLoading = (isLoading: boolean) => ({
    type: ActionTypes.isLoading,
    payload: isLoading
});
