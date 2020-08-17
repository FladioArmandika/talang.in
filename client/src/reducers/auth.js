import React from 'react'


export default function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN': {
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            }
        }
        case 'LOG_OUT': {
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
