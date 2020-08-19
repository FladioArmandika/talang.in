const Router    = require('express').Router;
const passport  = require('passport');
const GoogleAuth    = require('../../loaders/auth');
const AuthService   = require('../../services/auth')
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

    route.post('/login', async(req, res) => {

        const code = req.body.code;

        AuthService.login(code, (result) => {
            res.send(result)
        })

        // try {
            
        //     GoogleAuth.getProfileInfo(code, (payload, token) => {
        //         const profile = payload;
        //         const user = {
        //             googleId: profile.sub,
        //             name: profile.name,
        //             firstName: profile.given_name,
        //             lastName: profile.family_name,
        //             email: profile.email,
        //             profilePic: profile.picture,
        //         };

        //         res.send({
        //             user: user,
        //             token: token
        //         });
        //     });
        // } catch (e) {
        //     console.log(e);
        //     res.status(401).send();
        // }
    })
    
    route.get('/logout', (req, res) => {
        req.logout();
        req.session = null;
        res.redirect('/api/auth');
    })

}