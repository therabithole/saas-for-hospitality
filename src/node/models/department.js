const mongoose = require('mongoose');
const Joi = require('joi');

const deptSchema = new mongoose.Schema({
  
  name: {
    type: String,
    enum: ['hotel', 'restaurant', 'flight'],
    required: true,
    lowercase: true,
    trim: true,
    minlength: 5,
    maxlength: 20},
})

const Dept = mongoose.model('Dept', deptSchema);


 function validateDept(dept) {
    
    const schema = {
      name: Joi.string().min(3).required()
      
    };  
    return Joi.validate(dept, schema);
  }
  

  module.exports.Dept = Dept;
  module.exports.validateDept = validateDept;
  module.exports.deptSchema = deptSchema;
  
  