import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import UserService from '../../service/user'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserInfo } from '../../state/actions/user'
import { Button } from '../../components'

export default function Home() {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if(user) {
            UserService.getUserInfo(user.id, (result) => {
                dispatch(updateUserInfo(result))
            })
        }
    }, [user])

    return (
        <div>   
            {
                !user ? 
                <span>Loading</span>
                :
                <div>
                    Hello {user.name}
                    <br/>
                    <Button>CREATE DEBT</Button>
                    <br/>
                    <NavLink to='/profile'>My Profile</NavLink>
                </div>
            }
            
        </div>
    )
}
