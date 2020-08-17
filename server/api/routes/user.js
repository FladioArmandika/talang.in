const Router    = require('express').Router;
const Request   = require('express').request;
const Response  = require('express').response;

const UserService = require('../../services/user');

const route     = Router();

module.exports = (app) => {
    app.use('/user', route);

    route.get('/', async(req,res) => {
        UserService.getAllUser((data) => {
            console.log(data);
            res.send(data)
        })
    })
}

