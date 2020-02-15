import { FetchTodosAction, DeleteTodoAction } from './todos';
import { IsLoadingAction } from './loading';

export enum ActionTypes {
    fetchTodos,
    deleteTodo,
    isLoading
}

export type Action = FetchTodosAction | DeleteTodoAction | IsLoadingAction;
