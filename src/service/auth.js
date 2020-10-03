import axios from 'axios'
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '../state/actions/user';
// const host = 'http://localhost:3000'
const host = process.env.REACT_APP_HOST_SERVER 


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

        console.log('isAuthenticated');
        console.log(user);

        if (user && token) {
            return {
                status: true,
                data: {
                    user,
                    token
                }
            }
        } else {
            // callback(false)
            return {
                status: false
            }
        }
    }
};

export default AuthService;


