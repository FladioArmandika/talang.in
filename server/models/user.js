const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    name: {
        type: String,
    },
    token: {
        type: String,
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    friendrequests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'FriendRequest',
        }
    ],
    credits: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Creditor',
        }
    ],
    debtrequests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'DebtRequest',
        }
    ],
    history: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PayOff',
        }
    ]
})


module.exports = mongoose.model('User', UserSchema, 'users');
