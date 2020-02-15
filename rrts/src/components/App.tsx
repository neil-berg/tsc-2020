import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../reducers/index';
import { connect } from 'react-redux';

import { Todo, fetchTodos, deleteTodo } from '../actions';

// interface AppProps {
//     todos: Todo[];
//     fetchTodos: Function;
//     deleteTodo: typeof deleteTodo;
// }

// class _App extends React.Component<AppProps> {
//     onButtonClick = (): void => {
//         this.props.fetchTodos();
//     };

//     onTodoClick = (id: number): void => {
//         this.props.deleteTodo(id);
//     };

//     renderList(): JSX.Element[] {
//         return this.props.todos.map((todo: Todo) => {
//             return (
//                 <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
//                     {todo.title}
//                 </div>
//             );
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.onButtonClick}>Fetch</button>
//                 {this.renderList()}
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
//     return {
//         todos: state.todos
//     };
// };

// export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);

export const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const todos = useSelector((state: StoreState): Todo[] => state.todos);
    const loading = useSelector((state: StoreState): boolean => state.loading);

    const renderList = (todos: Todo[]): JSX.Element[] => {
        return todos.map(
            (todo: Todo): JSX.Element => (
                <li key={todo.id} onClick={() => dispatch(deleteTodo(todo.id))}>
                    {todo.title}
                </li>
            )
        );
    };

    return (
        <div>
            <h1>Hi there</h1>
            {loading ? <h2>Loading!!!!</h2> : <ul>{renderList(todos)}</ul>}
            <button onClick={() => dispatch(fetchTodos())}>Fetch Data</button>
        </div>
    );
};
