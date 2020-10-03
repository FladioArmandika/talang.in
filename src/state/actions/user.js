import { USER } from "../types"


export const updateUserInfo = (payload) => {

    return {
        type: USER.USER_INFO_UPDATE,
        payload
    }
}