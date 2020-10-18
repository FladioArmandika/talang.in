import React, { useReducer, useEffect } from 'react'
import { Input } from '../../components'
import GoogleLogin from 'react-google-login'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addCount } from '../../state/actions/count'
import { authLogin } from '../../state/actions/auth'
import { Redirect, useHistory } from 'react-router-dom'
import { AuthService } from '../../services'
import { Box, Button, Flex, Heading } from '@chakra-ui/core'

export default function Login() {
    
    const dispatch = useDispatch()
    const history = useHistory()

    const responseGoogle = async (authResult) => {
        try {
            if(authResult['code']) {
                AuthService.login(authResult['code'], (result) => {
                    var user = result.user;
                    var token = result.token;
                    dispatch(authLogin({user,token}))   


                    history.push('/');
                });
            } else {
                throw new Error(authResult)
            }
        } catch(e){ console.log(e);}
    }

    return (
        <Box>
            <Box h={'90vh', '100%'} justifyContent="center">
                <Flex mx={{md: 120, sm: 10}} justifyContent="center">
                    <Box rounded border='0px' borderColor='gray.100' w="30%" p={10}
                        // boxShadow="0px 0px 16px 3px rgba(0,0,0,0.09)">
                        boxShadow="none">
                        <Flex direction="column">
                            <Heading textAlign="center" marginBottom={30}>Login</Heading>
                            <GoogleLogin
                                clientId='683152750552-p140oaqd2qhqeb6f9ohd8o264md4c7nb.apps.googleusercontent.com'
                                buttonText="Login with Google"
                                responseType="code"

                                redirectUri="postmessage"
                                // redirectUri="http://localhost:3000/api/auth/google/callback"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                                />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}


