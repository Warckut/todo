import { createSlice,  nanoid, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from './store'

export interface ITodo {
    id: string, 
    date: Date, 
    value: string, 
    completed: boolean
}

export interface ITodoState {
    todos: ITodo[] 
}

const initialState = { todos: [] } as ITodoState

const todoSlice = createSlice( {
    name: 'todos',
    initialState,
    reducers: {
        addTodo: {
            reducer: (state, action: PayloadAction<string>) => {
                state.todos.push({
                    id: nanoid(), 
                    date: new Date(), 
                    value: action.payload, 
                    completed: false
                })
            },
            prepare: (value: string) => ({payload: value})
        },
        deleteTodo: {
            reducer: (state, action: PayloadAction<string>) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
            },
            prepare: (id: string) => ({payload: id})
        },
        completeTodo: {
            reducer: (state, action: PayloadAction<string>) => {
                state.todos = state.todos.map(todo => {
                    if (todo.id === action.payload)
                        todo.completed = true;
                    return todo
                })
            },
            prepare: (id: string) => ({payload: id})
        }
    }
})

export const selectTodos = (state: RootState) => state.rootReducer.todoReducer.todos
export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions
export default todoSlice.reducer