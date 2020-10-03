import React from 'react'

export default function Input({
    input, id, name, placeholder,
    onChange, value
}) {
    return (
        <input 
            type={input? input : 'text'}
            id={id? id : ''}
            name={name? name : ''}
            placeholder={placeholder? placeholder : ''} 
            onChange={onChange}/>
    )
}
