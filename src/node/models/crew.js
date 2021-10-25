const mongoose = require('mongoose');
const Joi = require('joi');

const crewSchema = new mongoose.Schema({
  
  service: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    minlength: 1,
    maxlength: 100},
})

const Crew = mongoose.model('Crew', crewSchema);


 function validateCrew(crew) {
    
    const schema = {
      service: Joi.string().min(3).required()
      
    };  
    return Joi.validate(crew, schema);
  }
  

  module.exports.Crew = Crew;
  module.exports.validateCrew = validateCrew;
  module.exports.crewSchema = crewSchema