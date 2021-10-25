const {Crew} = require("../models/crew");
const {Hotel, validateHotel} = require("../models/hotel");
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()
const Joi = require('joi');


// GET
router.get('/', async (req, res) => {
  
  const hotels = await Hotel.find();
    res.send(hotels);
  });
  
  
 // POST 
  router.post('/', async (req, res) => {
    const { error } = validateHotel(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    if (error) return res.status(401).send(error.details[0].message);
    if (error) return res.status(402).send(error.details[0].message);
    if (error) return res.status(403).send(error.details[0].message);
    if (error) return res.status(404).send(error.details[0].message);
    if (error) return res.status(500).send(error.details[0].message);
 
    // something new, connected to typeschema
     const crew = await Crew.findById(req.body.crewId) // *
    if (!crew) return res.status(400).send('Invalid Amniety') // *
  
 
    const hotel = new Hotel ({
        customer: req.body.customer,
       
       
    })
    
 
    await hotel.save()
    res.send(hotel);
     
  });
  
  
  // PIUT
  router.put('/:_id', async (req, res) => {
    
    const { error } = validateHotel(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
    
   
   const hotel = await Hotel.findByIdAndUpdate(req.params._id, {customer: req.body.customer}, {new: true})
  
    if (!hotel ) return res.status(404).send('The hotel  with the given ID was not found.');

    res.send(hotel );
  });
  
  router.delete('/:_id', async (req, res) => {
    
    
  
    const hotel = await Hotel.findByIdAndRemove(req.params._id)
   
    if (!hotel) return res.status(404).send('The genre with the given ID was not found.'); 
    res.send(hotel);
  });
  
  router.get('/:_id', async (req, res) => {
   
    const hotel = await Hotel.findById(req.params._id)
    if (!hotel) return res.status(404).send(`The hotel  with the given ID ${req.params._id} didnt match`);
    res.send(hotel);
  });
  
  module.exports = router;



router.get("/", (req, res) => {
  res.send("Hotels")
} )