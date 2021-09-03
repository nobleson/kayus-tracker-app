const mongoose = require('mongoose')
const config = require('../config/dbconf')

require('dotenv').config();
mongoose.Promise = global.Promise
 const mongoURL =  config.connectionString
//const mongoURL = config.connectionString
mongoose.connect(mongoURL, { useCreateIndex: true, useNewUrlParser: true, useFindAndModify: false , useUnifiedTopology: true }).then(() => {
    console.log('Successfully connected to the database')
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err)
    process.exit()
})


 
var db = mongoose.connection

module.exports.db = db
