const User  = require('../models/user')
const GoogleAuth    = require('../loaders/auth');

const AuthService = {
    login(code, callback) {
        GoogleAuth.getProfileInfo(code, (payload, token) => {
            const profile = payload;
            const user = {
                googleId: profile.sub,
                name: profile.name,
                firstName: profile.given_name,
                lastName: profile.family_name,
                email: profile.email,
                profilePic: profile.picture,
            };

            // Save to database
            // Save by Email
            User.findOneAndUpdate({email: user.email},
                {token: token}, 
                {new: true, upsert: true},
                (err, result) => {
                    if (err)
                        console.log(err);
                    console.log('TOKEN USER UPDATED');
                    console.log(result);

                    callback({
                        user: user,
                        token: token,
                    })
                })
        });
    }
}

module.exports = AuthService;