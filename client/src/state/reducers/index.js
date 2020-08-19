const { COUNT } = require("../types");
const { combineReducers } = require("redux");
const { default: auth } = require("./auth");
const { default: count } = require("./count");

const rootReducer = combineReducers({
    auth: auth,
    count: count,
},)

module.exports = rootReducer;