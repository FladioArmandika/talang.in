
import React, { useEffect } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from '../../state/actions/auth'
import UserService from '../../services/user'
import { updateUserInfo } from "../../state/actions/user";
import { Box, Button, Flex, Text } from '@chakra-ui/core'
import Cookies from 'universal-cookie'

export default function Profile() {

    const user = useSelector(state => state.user.user)
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

    const logout = () => {
        dispatch(authLogout())
        const cookies = new Cookies();
        cookies.remove('user');
        return (
            <Redirect to='/login'/>
        )
    }

    const back = () => {
        return (
            <Redirect to='/'/>
        )
    }
    
    return (
        <Box>
            {
                !user ? 
                <span>Loading</span>
                :
                <Flex justifyContent="center">
                    <Box w={500}>
                        <Box w="100%">
                             <Flex direction="row" justifyContent="space-between">
                                <NavLink to='/'>
                                    <Button cursor="pointer">
                                        Back
                                    </Button>
                                </NavLink>
                               
                                <Text fontWeight="bold">Profile</Text>
                                <Text></Text>
                            </Flex>
                        </Box>
                        <Flex direction="column">
                            <Box marginTop={10}>
                                <Text>Nama</Text>
                                <Text fontWeight="bold">{user.name}</Text>
                            </Box>
                            <Box marginTop={10}>
                                <Text>Nama</Text>
                                <Text fontWeight="bold">{user.email}</Text>
                            </Box>
                            <Button onClick={() => logout()} cursor="pointer"
                                marginTop={10}>
                                Logout
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
                
            }
            
        </Box>
    )
}
