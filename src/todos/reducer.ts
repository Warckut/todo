import { handleActions, Action } from 'redux-actions';

import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from './actions'

import {Todo, IState } from './model'

const initialState: IState = [<Todo>{
    date: new Date(),
    value: 'Use Redux with TypeScript',
    completed: false,
  }];

  export default handleActions<IState, Todo>({
    [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
      return [{
        date: action.payload.date,
        // id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: action.payload.completed,
        value: action.payload.value
      }, ...state];
    },
  
    [DELETE_TODO]: (state: IState, action: Action<Todo>): IState => {
      return state.filter(todo =>
        todo.value !== action.payload.value
      );
    },
  
    [COMPLETE_TODO]: (state: IState, action: Action<Todo>): IState => {
      return <IState>state.map(todo =>
        todo.value === action.payload.value ?
          { ...todo, completed: !todo.completed } :
          todo
      );
    },

  }, initialState);



// import todos from './states';

// export let reducer = (state = todos, action) => {
//     switch (action.type) {
//         case ADD_TODO:
//             break;
//         case DELETE_TODO:
//             break;
//         default:
//             return state;
//     }
// }