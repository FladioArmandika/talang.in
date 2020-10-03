import React, { useState } from 'react'
import { Input, Button } from '../../components'

export default function AddFriend({backToFriendList}) {

    const [inputEmail, setinputEmail] = useState("")

    const searchUser = (email) => {

    }

    return (
        <div>
            Add Friend
            <Button onClick={ () => backToFriendList()}>Back</Button>
            <br />
            <br />
            <br />
            <Input onChange={() => }/>
            <Button>CARI</Button>

        </div>
    )
}
