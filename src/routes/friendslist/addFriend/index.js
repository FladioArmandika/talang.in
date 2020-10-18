import { Box, Button, Flex, Input, Text } from '@chakra-ui/core'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserService } from '../../../services'

export default function AddFriend() {

    const [emailFriend, setEmailFriend] = useState("")
    const [friendFound, setFriendFound] = useState(null)

    const searchFriend = () => {
        UserService.getUserByEmail(emailFriend, (data) => {
            setFriendFound(data)
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
                            {friendFound.email}
                        </Box>
                    }
                </Box>
            </Flex>
        </Box>
    )
}
