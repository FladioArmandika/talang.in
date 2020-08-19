
import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Button } from '../../components'
import { useDispatch } from 'react-redux'
import { authLogout } from '../../state/actions/auth'

export default function Profile() {

    const dispatch = useDispatch()

    const logout = () => {
        dispatch(authLogout())
        
        return (
            <Redirect to='/login'/>
        )
    }
    
    return (
        <div>
            <NavLink to='/'>Back</NavLink>
            this is profile
            <Button 
                onClick={() => logout()}>
                Logout
            </Button>
        </div>
    )
}
