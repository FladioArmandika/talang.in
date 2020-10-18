import axios from 'axios'
import qs from 'querystring'

const host = process.env.REACT_APP_HOST_SERVER + process.env.REACT_APP_HOST_API_ENDPOINT

const UserService = {
    getUserInfo: async(userId, callback) => {
        var headers =  {
            'Content-Type': 'application/json',
        }
        var query = qs.stringify({ userid: userId })
        axios.get(host + '/user', query, {headers: headers})
            .then(res => { 
                callback(res.data[0]) 
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

        console.log(config); 

        axios(config)
            .then(res => { 
                callback(res.data) 
            })
            .catch(err => { console.error(err); })
    },
    addFriend: async(userId, email, callback) => {
        var headers =  {
            'Content-Type': 'application/json',
        }
        var body = { 
            userid: userId,
            email: email,
        }
        axios.post(host + '/user/friend', body, {headers: headers})
            .then(res => { 
                callback(res.data) 
            })
            .catch(err => { console.error(err); })
    }
}

export default UserService;
