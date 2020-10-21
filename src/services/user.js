import axios from 'axios'
import qs from 'querystring'

const host = process.env.REACT_APP_HOST_SERVER + process.env.REACT_APP_HOST_API_ENDPOINT

const UserService = {
    // GET USER INFO
    getUserInfo: async(userId, callback) => {
        var data = qs.stringify({
            userid: userId
        });
        var config = {
            method: 'POST',
            url: host + '/user',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        axios(config)
            .then(res => { 
                callback(res.data) 
            })
            .catch( err => { console.error(err); } )
    },
    // GET USER BY EMAIL
    getUserByEmail: async(email, callback) => {
        var data = qs.stringify({
            email: email
        });

        var config = {
            method: 'POST',
            url: host + '/user',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
            .then(res => { 
                callback(res.data) 
            })
            .catch(err => { console.error(err); })
    },
    // ADD FRIEND
    addFriend: async(userId, email, callback) => {
        var data = qs.stringify({
            userid: userId,
            email: email
        });

        var config = {
            method: 'POST',
            url: host + '/user/friend',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        axios(config)
            .then(res => { 
                callback(res.data) 
            })
            .catch(err => { console.error(err); })
    },
    // GET FRIEND REQUESTS
    getFriendRequests: async(userId, callback) => {
        var data = qs.stringify({
            userid: userId
        })
        var config = {
            method: 'GET',
            url: host + '/user/friend/request',
            headers: { 
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };
        axios(config)
            .then(res => { 
                callback(res.data) 
            })
            .catch(err => { console.error(err); })
    }
}

export default UserService;
