//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/harahond';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;