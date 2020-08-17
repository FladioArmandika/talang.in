const { request } = require('express');

const Router    = require('express').Router;
const user  = require('./routes/user');
const auth  = require('./routes/auth')

module.exports = () => {
    const app   = Router();
    user(app);
    auth(app);

    return app;
}