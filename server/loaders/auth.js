const GoogleStrategy    = require('passport-google-oauth').OAuth2Strategy;
const config            = require('../config')

const clientId = config.auth.google.clientId;
const clientSecret = config.auth.google.clientSecret;
const callbackUrl = config.auth.google.callbackUrl;

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new GoogleStrategy({
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: callbackUrl
    }, (token, refreshToken, profile, done) => {
        return done(null, {
            profile: profile,
            token: token
        });
    }));

}