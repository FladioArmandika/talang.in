import { AUTH } from "../types"

export const authLogin = (payload) => {
    return {
        type: AUTH.AUTH_LOGIN,
        payload
    }
}


export const authLogout = () => {
    return {
        type: AUTH.AUTH_LOGOUT
    }
}