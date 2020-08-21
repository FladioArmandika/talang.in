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

    route.get('/friend/request', async(req,res) => {
        var userId = req.body.userid

        if(!userId) {
            UserService.getUserFriendRequests(userid, (result) => {
                if(result.err) {
                    res.send({error: result.err}).status(401)
                } else {
                    res.send(result.data).status(200)
                }
            })
        } else {
            res.status(401).send({
                userId: 'there is no userId'
            })
        }
    })

    route.post('/friend/request', async(req,res) => {
        var status = req.body.status
        var requestId = req.body.requestId
        
        if(!status) {
            UserService.updateFriendRequest(requestId, status, (results) => {
                if(result.err) {
                    res.send({error: result.err}).status(401)
                } else {
                    res.send(result.data).status(200)
                }
            })
        }
    })


}

