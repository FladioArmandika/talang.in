const Debt  = require('../models/debt');

const DebtService = {
    getAllDebt: (callback) => {
        Debt.find({})
            .populate('debtor')
            .populate('creditors')
            .populate('debtrequest')
            .populate('payoff')
            .exec((err, debts) => {
                if (err) callback(err)
                callback(debts)
            })
    },
    getDebt: (debtId, callback) => {
        Debt.find({_id: debtId})
            .populate('debtor')
            .populate('creditors')
            .populate('debtrequest')
            .populate('payoff')
            .exec((err, debts) => {
                if (err) callback(err)
                callback(debts)
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
    getDebtRequest: (callback) => {
        
    }
}