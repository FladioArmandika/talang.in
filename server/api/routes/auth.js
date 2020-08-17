const Router    = require('express').Router;
const passport  = require('passport');

const route = Router();

module.exports = (app) => {
    app.use( '/auth', route);

    route.get('/', async(req,res) => {
        if (req.session.token) {
            res.cookie('token', req.session.token);
            res.json({
                status: 'sessions cookie set'
            })
        } else {
            res.cookie('token', '')
            res.json({
                status: 'session cookie not set'
            })
        }
    })

    route.get('/google', passport.authenticate('google', {
        scope: ['profile','email']
    }))

    route.get('/google/callback', 
        passport.authenticate('google', {
            // successRedirect: '/api/user',
            failureRedirect: '/api/auth'
        }), 
        (req, res) => {
            req.session.token = req.user.token;
            res.redirect('/api/auth');
        }
    )
    
    route.get('/logout', (req, res) => {
        req.logout();
        req.session = null;
        res.redirect('/api/auth');
    })

}