import { AUTH } from '../types';
import initialState from './state/state';

const auth = (state=initialState, action) => {

    console.log(action);

    switch (action.type) {
        case AUTH.AUTH_LOGIN: {
            // console.log(state);
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));

            // console.log(action.payload.user._id)
            return {
                ...state,
                isAuthenticated: true,
                user: {
                    id: action.payload.user._id,
                    email: action.payload.user.email,
                    name: action.payload.user.name,
                    friends: action.payload.user.friends,
                    friendrequests: action.payload.user.friendrequests,
                    debts: action.payload.user.debts,
                    credits: action.payload.user.credits,
                    history: action.payload.user.history,
                },
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