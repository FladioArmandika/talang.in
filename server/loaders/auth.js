// const GoogleStrategy    = require('passport-google-oauth').OAuth2Strategy;
const config            = require('../config')
const OAuth2Client      = require('google-auth-library').OAuth2Client;

const clientId = config.auth.google.clientId;
const clientSecret = config.auth.google.clientSecret;
const callbackUrl = config.auth.google.callbackUrl;

const client = new OAuth2Client(
    clientId,
    clientSecret,
    'postmessage'
)

exports.getProfileInfo = async (code, callback) => {
    const r = await client.getToken(code);
    const idToken = r.tokens.id_token;

    //access_token
    //id_token
    //expiry_date

    console.log(r);
  
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
  
    const payload = ticket.getPayload();
  
    callback(payload,idToken);
};

// module.exports = (passport) => {

//     passport.serializeUser((user, done) => {
//         done(null, user);
//     });
//     passport.deserializeUser((user, done) => {
//         done(null, user);
//     });

//     passport.use(new GoogleStrategy({
//         clientID: clientId,
//         clientSecret: clientSecret,
//         callbackURL: callbackUrl
//     }, (token, refreshToken, profile, done) => {
//         return done(null, {
//             profile: profile,
//             token: token
//         });
//     }));

// }

