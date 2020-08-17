const expressLoader = require('./express');
const mongooseLoader   = require('./mongoose');

module.exports = async(app) => {
    await mongooseLoader();
    console.log('Database loaded');

    await expressLoader(app);
    console.log('Express loaded');
}