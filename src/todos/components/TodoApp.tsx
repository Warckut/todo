import React, { useState } from 'react' 
import TodoList from './TodoList';
import { TodoItem } from './TodoItem';
import { Tab } from './Tabs/Tab';
import { Tabs } from './Tabs/Tabs';
import { connect, ConnectedProps, useSelector } from 'react-redux';
import { Todo } from '../model';

// import {
//     addTodo,
//     deleteTodo,
//     completeTodo
// } from '../actions'
// import { FC } from 'react';

// const SHOW_ALL = "show_all"
// const SHOW_COMPLETED = "show_completed"
// const SHOW_ACTIVE = "show_active"

// const TODO_FILTERS = {
//     [SHOW_ALL]: () => true,
//     [SHOW_ACTIVE]: (todo:Todo) => !todo.completed,
//     [SHOW_COMPLETED]: (todo:Todo) => todo.completed
//   };

// const mapState = (todo: Todo) => (todo);

// const mapDispatch = {
//     addTodo,
//     deleteTodo,
//     completeTodo
// };

// const connector = connect(mapState, mapDispatch);
// type PropsFromRedux = ConnectedProps<typeof connector>
// interface ITodoProps extends PropsFromRedux {}

export const TodoApp = () => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState<any[]>([])
    // const todos = useSelector(state => state)

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value)
    }

    const handleSubmit = (e: 
        React.FormEvent<HTMLFormElement> | 
        React.MouseEvent<HTMLButtonElement> ) => {

        e.preventDefault();
        
        const newTodoItem = {
            date: Date.now(),
            completed: false,
            value: input
        }
        if (input != "" )
            setTodos([newTodoItem, ...todos])        
        setInput("")
    }

    const handleDelete = (value: string) => {
        setTodos(todos.filter(todo => todo.value !== value));
    }
    
    const handleComplete = (value: string) => {
        setTodos(
            todos.map( todo => {
                if (todo.value === value)
                    todo.completed = true;
                return todo;
            } )
        );
    }

    return (
        <div className="todo-app">
            <span className="todo-app__header">Todo App</span>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                type="text"
                    className="todo-form__input"
                    placeholder="Add a todo"
                    value={input}
                    onChange={handleChangeInput}
                />
                <button onClick={handleSubmit} className="todo-form__add">Add</button>
            </form>
            <Tabs>
                <Tab title="All">
                    <TodoList>
                        {todos.map((todo) => {
                            return (
                                <TodoItem 
                                    date={todo.date}
                                    completed={todo.completed} 
                                    value={todo.value} 
                                    onDelete={handleDelete}
                                    onComplete={handleComplete}
                                />
                            )
                        })}
                    </TodoList> 
                </Tab>
                <Tab title="Active">
                    <TodoList>
                        {todos.map((todo) => {
                            if (!todo.completed)
                                return (
                                    <TodoItem 
                                        date={todo.date}
                                        completed={todo.completed} 
                                        value={todo.value} 
                                        onDelete={handleDelete}
                                        onComplete={handleComplete}
                                    />
                                )
                        })}
                    </TodoList> 
                </Tab>
                <Tab title="Completed">
                    <TodoList>
                        {todos.map((todo) => {
                            if (todo.completed)
                                return (
                                    <TodoItem 
                                        date={todo.date}
                                        completed={todo.completed} 
                                        value={todo.value} 
                                        onDelete={handleDelete}
                                        onComplete={handleComplete}
                                    />
                                )
                        })}
                    </TodoList> 
                </Tab>
            </Tabs>
        </div>
    )
}
