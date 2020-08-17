import React, { useReducer, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, Profile } from './routes';
import authReducer from './reducers/auth';
import Login from './routes/login';

export const AuthContext = React.createContext();

function combineReducers(reducers) {  
    return (state = {}, action) => {
      const newState = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
}

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};


export default function App() {
    const [state, dispatch] = useReducer(combineReducers({
        auth: authReducer,
    }), initialState)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || null);
        const token = JSON.parse(localStorage.getItem('token') || null);

        if (user && token) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    user,
                    token,
                }
            })
        }
    }, [])

    return (
        <AuthContext.Provider 
            value={{
                state,
                dispatch
            }}>
            {
                !state.isAuthenticated ?
                <Login />
                :
                <BrowserRouter>
                    <Switch>
                        <Route path='/profile'>
                            <Profile />
                        </Route>
                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
            }
        </AuthContext.Provider>
        
    )
}
