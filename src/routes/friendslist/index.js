import React, { useEffect, useState } from 'react'
import { Button } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { UserService } from '../../service'
import { updateUserInfo } from '../../state/actions/user'
import AddFriend from './AddFriend'
import { NavLink } from 'react-router-dom'

export default function FriendList() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [addFriend, setaddFriend] = useState(false)

    useEffect(() => {
        if(user) {
            UserService.getUserInfo(user.id, (result) => {
                dispatch(updateUserInfo(result))
            })
        }
    }, [])

    return (
        <div>
            {
                addFriend ?
                    <AddFriend backToFriendList={() => setaddFriend(false)}/>
                :
                <div>
                    <NavLink to="/"><Button onClick={() => {}}>Home</Button></NavLink>
                    <br /><br />
                    FriendList
                    <Button onClick={() => setaddFriend(true)}>
                        ADD
                    </Button>
                </div>
                
            }
        </div>
    )
}
