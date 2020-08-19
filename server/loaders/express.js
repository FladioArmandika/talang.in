const express   = require('express');
const bodyParser    = require('body-parser');
const cookieParser  = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors      = require('cors');
const routes    = require('../api');
const config    = require('../config');
const passport  = require('passport');

const clientSecret = config.auth.google.clientSecret;

module.exports = (app) => {

    // HEALTH CHECK
    app.get('/status', (req, res) => {
        res.status(200).end();
    });
    app.head('/status', (req, res) => {
        res.status(200).end();
    });

    app.use(cors());
    app.use(cookieParser());
    app.use(cookieSession({
        name: 'session',
        keys: [clientSecret],
        maxAge: 24 * 60 * 60 * 1000
    }))
    // auth(passport);
    app.use(passport.initialize());
    app.enable('trust proxy');
    app.use(bodyParser.json());
    app.use(config.api.prefix, routes())
    
    
   
    


    // CATCH 404 and forward to error handler
    app.use((req,res,next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    })

    // ERROR HANDLERS
    app.use((err, req, res, next) => {
        if (err.name === 'UnauthorizedError') {
            return res
              .status(err.status)
              .send({ message: err.message })
              .end();
        }
        return next(err);
    });
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
          errors: {
            message: err.message,
          },
        });
    });

}