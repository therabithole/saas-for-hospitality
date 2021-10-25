const mongoose = require('mongoose');
const winston = require('winston');
const config = require('config');

module.exports = function (){
    mongoose.connect('mongodb://localhost/hospitality')
       .then(()=> winston.info('Connected to MongoDB'))
       
       // .then(()=> console.log('Connected to MongoDB'))
       // .catch(err => console.error('Couldnt', err));

}

