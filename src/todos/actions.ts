import { createAction } from 'redux-actions';

import { Todo } from './model';
export const ADD_TODO = "ADD_TODO"
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

const addTodo = createAction<Todo, string>(
    ADD_TODO,
    (value: string) => ({ value, date: new Date(), completed: false })
  );
  
  const deleteTodo = createAction<Todo, Todo>(
    DELETE_TODO,
    (todo: Todo) => todo
  );

  const completeTodo = createAction<Todo, Todo>(
    COMPLETE_TODO,
    (todo: Todo) => todo
  )

  export {
      addTodo,
      deleteTodo,
      completeTodo
  }