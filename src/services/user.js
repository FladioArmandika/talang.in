import axios from 'axios'
import qs from 'querystring'

const host = process.env.REACT_APP_HOST_SERVER + process.env.REACT_APP_HOST_API_ENDPOINT

const UserService = {
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
