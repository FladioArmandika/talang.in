const User  = require('../models/user')
const FriendRequest = require('../models/friendrequest')

const UserService = {
    getAllUser(callback) {
        User.find({}, (err,data) => {
            console.log("service : " + data);
            callback(data)
        })
    },
    getUserInfo(userid, callback) {
        User.findOne({_id: userid})
            .populate('friends')
            .populate('friendrequests')
            .populate('credits')
            .populate('debtrequests')
            .populate('history')
            .exec((err,user) => {
                if(err) return err
                console.log("service by id: " + user);
                callback(user);
            })
    },
    getFriendRequests(userid, callback) {
        FriendRequest.find({from: userid, status: 'waiting'})
            .populate('to')
            .exec((err, friendRequests) => {
                if(err) return err
                callback(friendRequests)
            })
    }
} 

module.exports = UserService;

