// const consoleDebugger = require('debug')('app:consoleEnabled');
// const helmet = require("helmet"); // for securing app with setting some http headers
// const morgan = require('morgan'); // to log http requests

// mongod --dbpath ~/data/db


const winston = require('winston');
const express = require('express');
const app = express();




require("./startup/logs")(app);
require("./startup/cors")(app);
require("./startup/routes")(app)
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();


const port = process.env.PORT || 3003;
app.listen(port, () => winston.info(`Listening on port ${port}...`));

// use winston app.listen(port, () => console.log(`Listening on port ${port}...`));

/* 
if (app.get('env') === 'development') {
  app.use(morgan('tiny')) // tiny format display
  consoleDebugger('morgan enabled for http request on macdev. env. ')
}

*/

/* UNUSED


// auth
const logger = require('./middleware/admin')




 app.set('view engine', 'pug');
 app.set('views', './views')
 
// app.use(express.static('public'))
// app.use(helmet()) // http request se


// auth and log
app.use(logger)
app.use(customerAuth)

*/