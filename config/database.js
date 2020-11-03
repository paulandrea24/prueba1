const Mongoose = require('mongoose').Mongoose;
require( './config')


const dbImplenet = new Mongoose();

dbImplenet.connect(process.env.URLDB   , (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});
module.exports = { dbImplenet};

