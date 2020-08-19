import React, { useReducer, useEffect } from 'react'
import { Button, Input } from '../../components'
import GoogleLogin from 'react-google-login'
import { login } from '../../api/auth'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addCount } from '../../state/actions/count'
import { authLogin } from '../../state/actions/auth'
import { Redirect, useHistory } from 'react-router-dom'

export default function Login() {
    

    const dispatch = useDispatch()
    const history = useHistory()

    const responseGoogle = async (authResult) => {
        try {
            if(authResult['code']) {
                login(authResult['code'], (result) => {
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
        <div>
            this login page
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

            <br/><br/><br/><br/><br/>
        </div>
    )
}


