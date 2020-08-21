const User  = require('../models/user')
const FriendRequest = require('../models/friendrequest')

const UserService = {
    getAllUser: (callback) => {
        User.find({}, (err,data) => {
            console.log("service : " + data);
            callback(data)
        })
    },
    getUserInfo: (userid, callback) => {
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
    getUserFriendRequests: (userid, callback) => {
        FriendRequest.find({from: userid, status: 'waiting'})
            .populate('to')
            .exec((err, toRequests) => {
                FriendRequest.find({to: userid, status: 'waiting'})
                    .populate('from')
                    .exec((err, fromRequests) => {
                        callback({
                            err,
                            data: {
                                to: toRequests,
                                from: fromRequests
                            }
                        })
                    })
            })
    },
    updateFriendRequest: (requestId, status, callback) => {
        FriendRequest.findOneAndUpdate({_id: requestId}, {status: status})
            .then((err,result) => {
                callback({
                    err,
                    data: {'update friend request successful'}
                })
            })
    }
} 

module.exports = UserService;

