import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UserService } from '../../services'
import { updateUserInfo } from '../../state/actions/user'
import { NavLink, Redirect } from 'react-router-dom'
import { Box, Button, Flex, Text } from '@chakra-ui/core'


export default function FriendList() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    // const [addFriend, setaddFriend] = useState(false)

    useEffect(() => {
        if(user) {
            UserService.getUserInfo(user.id, (result) => {
                dispatch(updateUserInfo(result))
            })
        }
    }, [])

    const addFriend = () => {
        return <Redirect to="/friends/add"/>
    }

    return (
        <Box>
            {
                !user ?
                    <Text>Loading...</Text>
                :
                <Flex justifyContent="center">
                    <Box w={500}>
                        <Box w="100%">
                            <Flex direction="row" justifyContent="space-between">
                                <NavLink to="/"><Button onClick={() => {}}>Home</Button></NavLink>
                                FriendList
                                <NavLink to="/friends/add">
                                    <Button onClick={() => addFriend()}>
                                        ADD
                                    </Button>
                                </NavLink>
                            </Flex>
                            <Flex>
                                {JSON.stringify(user)}
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            }
        </Box>
    )
}
