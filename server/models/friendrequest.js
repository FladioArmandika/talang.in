const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const FriendRequestSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['reject','accept','waiting'],
        default: 'waiting'
    },
})


module.exports = mongoose.model('FriendRequest', FriendRequestSchema, 'friendrequests');
