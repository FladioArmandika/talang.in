const Debt  = require('../models/debt');
const User  = require('../models/user');
const Creditor  = require('../models/creditor');
const DebtRequest   = require('../models/debtrequest');
const DebtRequest   = require('../models/debtrequest');

module.exports = DebtService = {
    getAllDebt: (callback) => {
        Debt.find({})
            .populate('debtor')
            .populate('creditors')
            .populate('debtrequest')
            .populate('payoff')
            .exec((err, debts) => {
                callback({
                    err,
                    data: debts
                })
            })
    },
    getDebt: (debtId, callback) => {
        Debt.findOne({_id: debtId})
            .populate('debtor')
            .populate('creditors')
            .populate('debtrequest')
            .populate('payoff')
            .exec((err, debt) => {
                callback({
                    err,
                    data: debt
                })
            })
    },
    getDebtByDebtor: (debtorId, callback) => {
        Debt.find({debtor: debtorId})
            .populate('debtor')
            .populate('creditors')
            .populate('debtrequest')
            .populate('payoff')
            .exec((err, debts) => {
                if (err) callback(err)
                callback(debts)
            })
    },
    createDebt: (data, callback) => {
        var debt = new Debt({
            title: data.title,
            amount: data.amount,
            status: 'waiting',
            description: data.description,
            debtor: data.debtor,
            creditors: data.creditors,
        })

        // SAVE DEBT
        debt.save()
            .then((debt) => {
                // UPDATE : ADD DEBT TO USER COLLECTION
                User.findOneAndUpdate({_id: debt.debtor}, {'$push': { 'debts': debt._id }})
                    .then(() => {
                        // SAVE EVERY CREDITOR
                        debt.creditors.forEach(creditor => {
                            var newCreditor = new Creditor({
                                debt: debt._id,
                                user: creditor.user,
                                status: 'ongoing',
                                request: 'waiting',
                                total: creditor.total,
                                remain: creditor.total,
                            })
                            newCreditor.save()
                        });

                        callback({data: 'Debt added successful'})
                    })
            })
    },
    getDebtRequest: (requestId, callback) => {
        DebtRequest.find({_id: requestId})
            .populate('debt')
            .populate('user')
            .exec((err, debtRequest) => {
                callback(debtRequest)
            })
    }
}

