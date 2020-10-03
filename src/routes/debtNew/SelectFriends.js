import React from 'react'
import { Button } from '../../components'

export default function SelectFriends({friendlist,nextStep}) {

    return (
        <div>
            {console.log(friendlist)}
            Select Friend
            <Button onClick={() => nextStep()}>
                Next
            </Button>
        </div>
    )
}
