const { COUNT } = require("../types");
const { combineReducers } = require("redux");
const { default: auth } = require("./auth");
const { default: count } = require("./count");
const { default: user } = require("./user");

const rootReducer = combineReducers({
    auth: auth,
    count: count,
    user: user,
},)

module.exports = rootReducer;