import initialState from "./state/state";

const { USER } = require("../types");


const user = (state=initialState, action) => {

    switch (action.type) {
        case USER.USER_INFO_UPDATE: {
            return {
                // ...state,
                user: {
                    id: action.payload._id,
                    email: action.payload.email,
                    name: action.payload.name,
                    friends: action.payload.friends,
                    friendrequests: action.payload.friendrequests,
                    debts: action.payload.debts,
                    credits: action.payload.credits,
                    history: action.payload.history,
                },
            }
        }
        default: return state;
    }
}

export default user;