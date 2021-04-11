import { ImCross } from 'react-icons/all'
import { FaCheck } from 'react-icons/all'
import './Todo.css'

export type TodoItem = {
    date: Date,
    value: string,
    completed: boolean,
    onDelete: (value: string) => void,
    onComplete: (value: string) => void
}



export const TodoItem = ({date, value, completed, onDelete, onComplete} : TodoItem) => {

    const handleDelete = () => {
        onDelete(value)
    }

    const handelCompleted = () => {
        onComplete(value)
    }

    return (
        <div className="todo-item">
            <p className="todo-item__text">
                { completed ? <s>{value}</s> : value}
            </p>
            <div className="todo-icons">
                <FaCheck 
                    className={ completed ? 'todo-item__check-completed' : 'todo-item__check'}
                    size="18" 
                    onClick={handelCompleted} 
                    />
                <ImCross 
                    className="todo-item__remove" 
                    onClick={handleDelete} 
                />
            </div>
        </div>
    )
}