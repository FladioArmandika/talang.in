const mongoose      = require('mongoose')
const Schema        = mongoose.Schema

const DebtSchema = new Schema({
    title: {
        type: String,
    },
    amount: {
        type: String,
    },
    status: {
        type: String,
        enum: ['done','waiting','roll'],
        default: 'waiting'
    },
    description: {
        type: String,
    },
    debtor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },  
    creditors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Creditor'
        }
    ],
    debtrequest: [
        {
            type: Schema.Types.ObjectId,
            ref: 'DebtRequest'
        }
    ],
    payoff: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PayOff'
        }
    ]
}, {timestamps:true});

module.exports = mongoose.model('Debt', DebtSchema, 'debts');