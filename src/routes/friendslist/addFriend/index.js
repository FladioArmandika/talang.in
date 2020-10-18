import { Box, Button, Flex, Input, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserService } from '../../../services'
import Cookies from 'universal-cookie'

export default function AddFriend() {

    const [emailFriend, setEmailFriend] = useState("")
    const [friendFound, setFriendFound] = useState(null)

    const searchFriend = () => {
        UserService.getUserByEmail(emailFriend, (data) => {
            setFriendFound({
                ...data,
                status: 'Add'
            })
        })
    }

    const addFriend = () => {

        const cookies = new Cookies();
        const userCookie = cookies.get('user');

        const userId = userCookie._id;

        UserService.addFriend(userId,emailFriend, (data) => {
            alert('FRIEND ADDED')
            setFriendFound({
                ...data,
                status: 'Sent'
            })
        })
        setFriendFound({
            ...friendFound,
            status: 'Pending'
        })
    }

    return ( 
        <Box>
            <Flex justifyContent="center">
                <Box w={500}>
                    <Box>
                        <Flex direction="row" justifyContent="space-between">
                            <NavLink to="/friends">
                                <Button>BACK</Button>
                            </NavLink>
                            <Text>ADD FRIEND</Text>
                        </Flex> 
                    </Box>
                    <Box w="100%" paddingY={10}>
                        <Flex direction="row" justifyContent="space-between">
                            <Input 
                                value={emailFriend}
                                onChange={e => {
                                    setEmailFriend(e.target.value)
                                }}/>
                            <Button onClick={() => searchFriend()}>SEARCH</Button>
                        </Flex>
                    </Box>

                    {
                        !friendFound 
                        ? <Text></Text>
                        : 
                        <Box>
                            <Flex justifyContent="space-between">
                                {friendFound.name}
                                <Button onClick={() => addFriend()}>{friendFound.status}</Button>
                            </Flex>
                        </Box>
                    }
                </Box>
            </Flex>
        </Box>
    )
}
