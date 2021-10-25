
const {Crew, validateCrew} = require("../models/crew");
const mongoose = require('mongoose');

const express = require('express');
const router = express.Router()
const Joi = require('joi');


// GET
router.get('/', async (req, res) => {

  
    const crews = await Crew.find();
    const count = crews.length
    if(count === 0) {res.send("No Crew")}
    else { res.send(crews);} 
   

 
  });
  
  
 // POST 
  router.post('/', async (req, res) => {
    
   // const token = req.header
    const { error } = validateCrew(req.body); 
    if (error)  {
        res.status(400).send(error.details[0].message); 
        return; }
  
    let crew = new Crew ({
      service: req.body.service
    }) 
    crew = await crew.save() 
    res.send(crew);
  });
  
  
  // PUT
  router.put('/:_id', async (req, res) => {


const { error } = validateCrew(req.body); 
if (error) { res.status(400).send(error.details[0].message)
return ;}

   
    const crew = await Crew.findByIdAndUpdate(req.params._id, {service: req.body.service}, {new: true})
     if (!crew ) res.status(404).send('The amenity  with the given ID was not found.');
  
    res.send(crew);
  });
  
  router.delete('/:_id', async (req, res) => {
   
  
    const crew = await Crew.findByIdAndRemove(req.params._id)
    if (!crew) return res.status(404).send('The crew with the given ID was not found.');
  
  
    res.send(crew);
  });
  
  router.get('/:_id', async (req, res) => {
  
 const crew = await Crew.findById(req.params._id)
    if (!crew) return res.status(404).send('The crew  with the given ID was not found.');
    res.send(crew);
  });
  
  
 
  module.exports = router;
  
