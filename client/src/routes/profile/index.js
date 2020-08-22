
import React, { useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { Button } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from '../../state/actions/auth'
import UserService from '../../service/user'
import { updateUserInfo } from "../../state/actions/user";

export default function Profile() {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            UserService.getUserInfo(user.id, (result) => {
                dispatch(updateUserInfo(result))
            })
        }
    }, [])

    const logout = () => {
        dispatch(authLogout())
        return (
            <Redirect to='/login'/>
        )
    }
    
    return (
        <div>
            {
                !user ? 
                <span>Loading</span>
                :
                <div>
                    <NavLink to='/'>Back</NavLink>
                    this is profile
                    <Button 
                        onClick={() => logout()}>
                        Logout
                    </Button>
                </div>
                
            }
            
        </div>
    )
}
