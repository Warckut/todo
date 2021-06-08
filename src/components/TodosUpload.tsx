// type TodosUpload = {

import React from "react";
import { useState } from "react"
import { FileReference } from "typescript";

export const TodosUpload = () => {
    // const {fetchTodos, removeTodo} = useActions()
    let fileInput: File | null = null; 

    const handleSubmit = (e : 
        React.FormEvent<HTMLFormElement> 
        | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        // if (fileInput) fetchTodos(fileInput)
    }   

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length)
        fileInput = e.target.files[0]
    }

    return (
        <div className="previewComponent">
            <form onSubmit={handleSubmit}>
            <input className="fileInput" 
                type="file"
                onChange={onFileChange}/>
            <button className="submitButton" 
                type="submit" 
                onClick={handleSubmit}>Upload Image</button>
            </form>
        </div>
    )
}

