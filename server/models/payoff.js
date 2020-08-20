const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const PayOffSchema = new Schema({
    debt: {
        type: Schema.Types.ObjectId,
        ref: 'Debt'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: Number
    },
    img: {
        type: String
    },
})


module.exports = mongoose.model('PayOff', PayOffSchema, 'payoffs');
