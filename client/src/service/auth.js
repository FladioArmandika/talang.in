import axios from 'axios'
const host = 'http://localhost:3000'


const AuthService = {
    login: async(code, callback) => {
        var headers =  {
            'Content-Type': 'application/json',
        }
        axios.post(host + '/api/auth/login',JSON.stringify({code}), {
                headers: headers
            })
            .then(res => { callback(res.data) })
            .catch(err => { console.error(err); })
    },
    
    logout: async(callback) => {
        axios.get(host + '/api/auth/logout', {})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
    },

    isAuthenticated: () => {
        const user = JSON.parse(localStorage.getItem('user') || null);
        const token = JSON.parse(localStorage.getItem('token') || null);

        if (user && token) {
            // callback(true)
            return true
        } else {
            // callback(false)
            return false
        }
    }
};

export default AuthService;


