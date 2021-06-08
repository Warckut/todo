import React, {useState} from 'react'
import { TodoItem } from './TodoItem'
import "./Todo.css"


type TodoList = {
    children: any
}

const TodoList = ({children} : TodoList) => {
    return (
        <div className="todo-list">
            {children}
        </div>
    )
}

export default TodoList