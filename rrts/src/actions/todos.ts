import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
import { setIsLoading } from './loading';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        const res = await axios.get<Todo[]>(url);

        dispatch(setIsLoading(true));

        setTimeout(() => {
            dispatch<FetchTodosAction>({
                type: ActionTypes.fetchTodos,
                payload: res.data
            });
            dispatch(setIsLoading(false));
        }, 2000);
    };
};

export const deleteTodo = (id: number) => ({
    type: ActionTypes.deleteTodo,
    payload: id
});
