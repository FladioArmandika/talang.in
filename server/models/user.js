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
    }
})


module.exports = mongoose.model('User', UserSchema, 'users');
