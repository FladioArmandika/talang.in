import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import UserService from '../../service/user'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserInfo } from '../../state/actions/user'
import { Box, Button, Flex, Text } from '@chakra-ui/core'
import { Colors } from '../../components'

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
        <Box>   
            {
                !user ? 
                <span>Loading</span>
                :
                <Flex justifyContent="center">
                    <Box w={500}>
                        {/* HEADER */}
                        <Box background={Colors.bgPrimary}>
                            <Box w="100%">
                                <Flex direction="row" justifyContent="space-between">
                                    <Text fontWeight="bold">{user.name}</Text>
                                    <NavLink to='/profile'>
                                        <Button>
                                            My Profile
                                        </Button>
                                    </NavLink>
                                </Flex>
                            </Box>
                        </Box>

                        {/* BODY */}
                        <Box>
                            <Box w="100%">
                                <NavLink to='/debt/create'>
                                    <Button>CREATE DEBT</Button>
                                </NavLink>
                                <NavLink to='/friends'>
                                    <Button>FRIEND LIST</Button>
                                </NavLink>
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            }
            
        </Box>
    )
}
