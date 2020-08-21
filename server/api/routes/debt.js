const Router    = require('express').Router;

const DebtService   = require('../../services/debt');
const route = Router();

module.exports = (app) => {
    app.use('/debt', route);

    /*
        without id : return all debt
        with id : return one debt by debtId
        body :
            -userid
    */
    route.get('/', async(req,res) => {
        var debtId  = req.body.id;

        // CHECK IF DEBTID EXISTS
        if (debtId) {
            DebtService.getDebt(debtId, (result) => {
                if(result.err) {
                    res.send({err: 'Error : '+result.err}).status(401)
                } else {
                    res.send(result.data)
                }
            })
        } else {
            DebtService.getAllDebt((result) => {
                if(result.err) {
                    res.send({err: 'Error : '+result.err}).status(401)
                } else {
                    res.send(result.data)
                }
            })
        }
    })

    /*
        [POST]
        add new debt
        body : 
         -userid -title -amount -status -description
         -owner -creditors
    */
    route.post('/', async(req,res) => {
        var data = req.body;

        DebtService.createDebt(data, (result) => {
            if(result.err) {
                res.send({err: 'Error : '+result.err}).status(401)
            } else {
                res.send(result.data).status(200)
            }
        })
    })

}