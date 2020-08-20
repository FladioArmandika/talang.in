const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const CreditorSchema = new Schema({
    debt: {
        type: Schema.Types.ObjectId,
        ref: 'Debt'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['paid','in debt'],
        default: 'in debt'
    },
    total: {
        type: Number
    },
    remain: {
        type: Number
    },
})


module.exports = mongoose.model('Creditor', CreditorSchema, 'creditors');
