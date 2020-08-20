const Router    = require('express').Router;
const Request   = require('express').request;
const Response  = require('express').response;

const UserService = require('../../services/user');
const user = require('../../models/user');

const route     = Router();

module.exports = (app) => {
    app.use('/user', route);

    route.get('/', async(req,res) => {
        var userId = req.body.id

        // CHECK IF USERID EXISTS
        if(!userId) {
            UserService.getAllUser((data) => {
                console.log("route: " + data);
                res.send(data)
            })
        } else {
            UserService.getUserInfo(userId, (data) => {
                console.log(data);
                res.send(data)
            })
        }
    })

    route.get('/friend', async(req,res) => {
        var userId = req.body.id

        if(!userId) {

        } else {
            res.status(401).send({
                userId: 'there is no userId'
            })
        }
    })


}

