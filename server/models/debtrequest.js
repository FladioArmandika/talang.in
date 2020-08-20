const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const DebtRequestSchema = new Schema({
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
        enum: ['reject','accept','waiting'],
        default: 'waiting'
    },
    amount: {
        type: Number
    },
})


module.exports = mongoose.model('DebtRequest', DebtRequestSchema, 'debtrequests');
