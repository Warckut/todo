import React from 'react' 
import TodoList from './TodoList';
import { TodoItem } from './TodoItem';
import { Tab } from './Tabs/Tab';
import { Tabs } from './Tabs/Tabs';
import { addTodo, completeTodo, deleteTodo, ITodo, selectTodos } from '../toolkitRedux/TodoReducer';
import { useDispatch, useSelector } from 'react-redux';


const TodoApp: React.FC<any>= () => {
    let input: any;

    const dispatch = useDispatch()
    const todos = useSelector(selectTodos)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.value.trim())
            return
        dispatch(addTodo(input.value))
        input.value = ''
    }

    console.log(todos)

    const handleDelete = (id: string) => {
        dispatch(deleteTodo(id))
    }
    
    const handleComplete = (id: string) => {
        dispatch(completeTodo(id))
    }

    return (
        <div className="todo-app">
            <span className="todo-app__header">Todo App</span>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input
                type="text"
                    className="todo-form__input"
                    placeholder="Add a todo"
                    ref={node => input = node}
                    value={input}
                />
                <button type="submit" className="todo-form__add">Add</button>
            </form>
            <Tabs>
                <Tab title="All">
                    <TodoList>
                        {todos.map((todo: ITodo) => {
                            return (
                                <TodoItem
                                    key={todo.id}
                                    id={todo.id}
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
                        {todos.map((todo: ITodo) => {
                            if (!todo.completed) 
                                return (
                                    <TodoItem 
                                        key={todo.id}
                                        id={todo.id}
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
                        {todos.map((todo: ITodo) => {
                             if (todo.completed) 
                                return (
                                    <TodoItem
                                        key={todo.id} 
                                        id={todo.id}
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

export default TodoApp