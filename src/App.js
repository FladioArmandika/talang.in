import React, { useReducer, useEffect, Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, useHistory } from "react-router-dom";
import { Home, Profile, DebtNew, FriendList } from './routes';
import authReducer from './state/reducers/auth';
import Login from './routes/login';
import { useSelector, useDispatch } from 'react-redux';
import { authLogin } from './state/actions/auth';
import { AuthService } from './service';
import { updateUserInfo } from './state/actions/user';


export default function App() {

    const auth = useSelector(state => state.auth);
    const history = useHistory()

    const dispatch = useDispatch()

    const PrivateRoute = ({path, component : Component}) => {
        const isAuth = AuthService.isAuthenticated()
        isAuth.status ? dispatch(updateUserInfo(isAuth)): console.log('not logged');
    
        return (
            <Route path={path} 
                render={ (props) => isAuth.status
                    ? <Component {...props} />
                    : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
                }/>
        )
    }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || null);
        const token = JSON.parse(localStorage.getItem('token') || null);
        if (user && token) {
            dispatch(authLogin({user,token}))
        }
    }, [])


    return (
        <Switch>
            { !auth.isAuthenticated && <Route path='/login' component={Login}/>}
            <PrivateRoute path='/profile'component={Profile}/>
            <PrivateRoute path='/friends'component={FriendList}/>
            <PrivateRoute path='/debt/create'component={DebtNew}/>
            <PrivateRoute path='/' component={Home}/>  
        </Switch>
    )
}


