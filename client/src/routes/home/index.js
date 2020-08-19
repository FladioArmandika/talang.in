import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            this is home
            <NavLink to='/profile'>My Profile</NavLink>
        </div>
    )
}
