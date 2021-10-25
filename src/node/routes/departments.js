
const {Dept, validateDept} = require("../models/department");
const mongoose = require('mongoose');

const express = require('express');
const router = express.Router()
const Joi = require('joi');


// GET
router.get('/', async (req, res) => {

  
    const departments = await Dept.find();
    res.send(departments);

 
  });
  
  
 // POST 
  router.post('/', async (req, res) => {
    const { error } = validateDept(req.body); 
    if (error)  {
        res.status(400).send(error.details[0].message); 
        return; }
  
    let dept = new Dept ({
      name: req.body.name
    }) 
   // amenities.push(dept ); for working with array
    dept = await dept.save() // for mongo
    res.send(dept);
    // res.send(amenities);
  });
  
  
  // PIUT
  router.put('/:_id', async (req, res) => {


// validate from client First
const { error } = validateDept(req.body); 
if (error) { res.status(400).send(error.details[0].message)
return ;}

     // look up - working with array
    // const dept = amenities.find(dept => (dept._id === req.params._id));
   
    const dept = await Dept.findByIdAndUpdate(req.params._id, {name: req.body.name}, {new: true})
     if (!dept ) res.status(404).send('The department  with the given ID was not found.');
  
    res.send(dept);
  });
  
  router.delete('/:_id', async (req, res) => {
   
   // working with array
   //  const dept  = amenities.find(dept => dept._id === req.params._id)
  //   const index = amenities.indexOf(dept );
  //   amenities.splice(index, 1);
  
    const dept = await Dept.findByIdAndRemove(req.params._id)
    if (!dept) return res.status(404).send('The genre with the given ID was not found.');
  
  
    res.send(dept);
  });
  
  router.get('/:_id', async (req, res) => {
  // working with array
  //  const dept  = amenities.find(dept => dept._id === req.params._id);
  
 const dept = await Dept.findById(req.params._id)
    if (!dept) return res.status(404).send('The dept  with the given ID was not found.');
    res.send(dept);
  });
  
  
 
  module.exports = router;
  
  
  /* 
  
  const amenities = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Free Parking" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Free Breakfast" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Meeting Rooms" }
];


*/

/* 

const asyncMiddleware = require("../middleware/async")
not needed anymore. barebore try catch for all routes/route handelrs
*/