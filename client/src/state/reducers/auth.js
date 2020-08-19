import React from 'react'
import { AUTH } from '../types';


const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
}

const auth = (state=initialState, action) => {

    console.log(action);

    switch (action.type) {
        case AUTH.AUTH_LOGIN: {
            console.log(state);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));

            console.log(action.payload.user);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            }
        }
        case AUTH.AUTH_LOGOUT: {
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                token: null,
            }
        }
        default: return state;
    }
}

export default auth;