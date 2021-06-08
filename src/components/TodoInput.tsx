import React, { useState } from 'react';

type Input = {
    value?: string;
    onChange: (value: string) => void;
}

const Input = ({value, onChange}: Input) => {    
    const onInput = (e: React.FormEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value);
    };

    return (
        <input value={value} onInput={onInput} className="todo-input"/>
    )
}

export default Input