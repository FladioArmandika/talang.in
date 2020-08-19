import React, { useReducer, useEffect, Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Home, Profile } from './routes';
import authReducer from './state/reducers/auth';
import Login from './routes/login';
import { useSelector, useDispatch } from 'react-redux';
import { authLogin } from './state/actions/auth';


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
            {/* <PublicRoute path='/login' auth={auth}
                component={Login}/>
            <PrivateRoute path='/profile' auth={auth}
                component={Profile}/>
            <PrivateRoute path='/' auth={auth}
                component={Home}/>  */}
            { auth.isAuthenticated && <Route path='/profile' component={Profile}/>}
            { !auth.isAuthenticated && <Route path='/login' component={Login}/>}
            { auth.isAuthenticated && <Route path='/' component={Home}/>}
        </Switch>
    )
}


const PrivateRoute = ({path, component : Component, auth}) => {
    return (
        <Route path={path} 
            render={ (props) => auth.isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
            }/>
    )
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