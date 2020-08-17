const dotenv    = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if(envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️")
}




module.exports = {
    port: parseInt(process.env.PORT, 10),
    
    host: process.env.SERVER_HOST,
    api: {
        prefix: '/api',
    },

    db: {
        url: 'mongodb+srv://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@talangin.bdq9j.mongodb.net/<talangin>?retryWrites=true&w=majority',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    },

    auth: {
        google: {
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
            callbackUrl: 'http://localhost:3000/api/auth/google/callback'
        }
    }
}
