import { Action, ActionTypes } from '../actions';

export const loadingReducer = (state: boolean = false, action: Action) => {
    switch (action.type) {
        case ActionTypes.isLoading:
            return action.payload;
        default:
            return state;
    }
};
