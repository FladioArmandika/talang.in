import axios from 'axios'

const host = process.env.REACT_APP_HOST_SERVER + process.env.REACT_APP_HOST_API_ENDPOINT

const UserService = {
    getUserInfo: async(userId, callback) => {
        var headers =  {
            'Content-Type': 'application/json',
        }
        var body = { userid: userId }
        axios.get(host + '/user', body, {headers: headers})
            .then(res => { 
                callback(res.data[0]) 
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
