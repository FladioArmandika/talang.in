import React from 'react'

// import './style.css'

export default function Button({children, onClick}) {
    return (
        <button 
            style={
                {
                    padding: 10,
                }
            }
            onClick={onClick}>
            {children}
        </button>
    )
}
