import React, { useReducer, useEffect, Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Home, Profile } from './routes';
import authReducer from './state/reducers/auth';
import Login from './routes/login';
import { useSelector, useDispatch } from 'react-redux';
import { authLogin } from './state/actions/auth';
import { AuthService } from './service';


export default function App() {

    const auth = useSelector(state => state.auth);
    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || null);
        const token = JSON.parse(localStorage.getItem('token') || null);

        console.log(auth.isAuthenticated);

        if (user && token) {
            dispatch(authLogin({user,token}))
        }
    }, [])


    return (
        <Switch>
            { !auth.isAuthenticated && <Route path='/login' component={Login}/>}
            <PrivateRoute path='/profile'component={Profile}/>
            <PrivateRoute path='/' component={Home}/>  
            {/* { auth.isAuthenticated && <Route path='/profile' component={Profile}/>}
            { !auth.isAuthenticated && <Route path='/login' component={Login}/>}
            { auth.isAuthenticated && <Route path='/' component={Home}/>} */}
        </Switch>
    )
}


const PrivateRoute = ({path, component : Component}) => {

    const isAuth = AuthService.isAuthenticated()

    alert(isAuth)

    return (
        <Route path={path} 
            render={ (props) => isAuth
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }/>
    )


    // AuthService.isAuthenticated(auth => {
    //     return (
    //         <Route path={path} 
    //             render={ (props) => auth
    //                 ? <Component {...props} />
    //                 : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    //             }/>
    //     )
    // })
}



const PublicRoute = ({path, component : Component, auth}) => {
    return (
        <Route path={path} 
            render={ (props) => auth.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }/>
    )
}