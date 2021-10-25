const mongoose = require('mongoose');
const {crewSchema} = require("./crew");
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)


const Flight = mongoose.model('Flights',new mongoose.Schema({
  customer: {type: String},

 


 
}))

function validateFlight(flight) {
    
    const schema = {
    customer: Joi.string(),
   
   
  
  
    };
    return Joi.validate(flight, schema);
  }

   
   module.exports.Flight = Flight;
   module.exports.validateFlight = validateFlight;
