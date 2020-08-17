
const mongoose  = require('mongoose');
const config    = require('../config');

module.exports = async(app) => {
    console.log(config.db.url)
    const connection = await mongoose.connect(config.db.url, {useNewUrlParser:true, dbName:'talangin'});
    
    return connection.connection.db;
}