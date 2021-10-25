
const winston = require('winston')
require('express-async-errors');
require('winston-mongodb')

module.exports = function (){
    // Unhandeld Promise Rejections

//Caught Exceptions - Error handling - Express
// winston.add(winston.transports.File, {filename: 'masterErrorLogs.log'}),
winston.add(winston.transports.MongoDB, {db: 'mongodb://localhost/hospitality'})

winston.handleExceptions(
  new winston.transports.File({filename: 'uncaughtEceptions.log'}),
  // For displaying also on console for new developers/ and new machines/other machines to see on Console apart from log files.
  new winston.transports.Console({colorize: true, prettyPrint: true})
)

// let winston catch it,
process.on('unhandledRejection', (ex) => {
  throw ex;
});

}


/*
// Uncaught Exceptions Process WAY - Error Handling - non Express-global
process.on('uncaughtException', (ex) => {
  // console.log("We have got an Uncaught Exception, Wire Winston ")
  winston.error(ex.message, ex)
  process.exit(1)
})

// UnhandledRejection Process WAY - Error Handling - non Express-global
process.on('unhandledRejection', (ex) => {
  // console.log("We have got an Uncaught Promise Rejection, Wire Winston ")
  winston.error(ex.message, ex)
  process.exit(1)
})
*/
