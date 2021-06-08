import React, {useState} from 'react'

const TodoForm = ({onSubmit}:any) => {
    const [input, setInput] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: 
        React.FormEvent<HTMLFormElement> | 
        React.MouseEvent<HTMLButtonElement> ) => {

        e.preventDefault();
        
        // onSubmit({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // })
        
        setInput("")
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a todo"
                value={input}
                onChange={handleChange}
            />
            <button onClick={handleSubmit} className='todo-button edit'>
                Add
            </button>
        </form>
        
    )
}

// export default TodoForm