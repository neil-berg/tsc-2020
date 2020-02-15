import { combineReducers } from 'redux';

import { Todo } from '../actions';
import { todosReducer } from '../reducers/todos';
import { loadingReducer } from '../reducers/loading';

export interface StoreState {
    todos: Todo[];
    loading: boolean;
}

export const reducers = combineReducers<StoreState>({
    todos: todosReducer,
    loading: loadingReducer
});
