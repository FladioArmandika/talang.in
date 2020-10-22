import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import UserService from '../../services/user'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserInfo } from '../../state/actions/user'
import { Box, Button, Flex, Text } from '@chakra-ui/core'
import { Colors } from '../../components'
import Cookies from 'universal-cookie'

export default function Home() {

    const user = useSelector(state => state.user.user);
    const dispatch = useDispatch()

    useEffect(() => {
        const cookies = new Cookies();
        const userCookie = cookies.get('user');
        const userId = userCookie._id;

        if(userId) {
            UserService.getUserInfo(userId, (result) => {
                dispatch(updateUserInfo(result))
            })
        }
        
    }, [])

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

                        {/* FRIEND REQUEST */}

                        <Box mt={5}>
                            <Flex justifyContent="space-between" mb={5}>
                                <Text fontWeight="bold">Friend Request</Text>
                                <Text>show all</Text>
                            </Flex>
                            {
                                user ? 
                                    user.friendrequests ?
                                        user.friendrequests.map(friendRequest => {
                                            if (friendRequest.to.email == user.email) {
                                                return (
                                                    <Box p={5} background="#F7FAFC">
                                                        <Flex direction="row" justifyContent="space-between">
                                                            {friendRequest.from.email}<br/>
                                                            {friendRequest.status}<br/>
                                                            <Flex>
                                                                <Button>ACCEPT</Button>
                                                                <Button>REJECT</Button>
                                                            </Flex>
                                                        </Flex>
                                                    </Box>
                                                )
                                            } else {
                                                return (
                                                    (<Box></Box>)
                                                )
                                            }
                                        })
                                    : 
                                    <Box>
                                        gak ada
                                        {JSON.stringify(user)}
                                    </Box>
                                : <Text>User belum ada</Text>
                            }
                        </Box>
                    </Box>
                </Flex>
            }
            
        </Box>
    )
}
