import axios from 'axios'
const host = 'http://localhost:3000'


const login = async(code, callback) => {
    var headers =  {
        'Content-Type': 'application/json',
    }
    axios.post(host + '/api/auth/login',JSON.stringify({code}), {
            headers: headers
        })
        .then(res => { callback(res.data) })
        .catch(err => { console.error(err); })
}

const logout = async(callback) => {
    axios.get(host + '/api/auth/logout', {})
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err); 
        })
}

export {
    login
};