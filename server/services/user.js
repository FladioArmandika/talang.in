const User  = require('../models/user')

const UserService = {
    getAllUser(callback) {
        User.find({}, (err,data) => {
            console.log(data);
            callback(data)
        })
    },
    getUserById(userid, callback) {
        User.findOne({_id: userid}, (err, data) => {
            console.log(data);
            callback(data);
        })
    }
} 

module.exports = UserService;

