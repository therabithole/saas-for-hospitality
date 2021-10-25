


const admin = require('../middleware/admin');
const mongoose = require('mongoose');

const express = require('express');
const router = express.Router()
const Joi = require('joi');


// GET
router.get('/', async (req, res) => {

  
    const myBookings = ["booking1", "booking2"]  
    const myCustomers = ["Micheal", "Ryan"]

    const myReports = {
        myBookings,
        myCustomers
    }
    res.send(myReports);

 
  });
  
  
 // POST 
  router.post('/', async (req, res) => {
   
   res.send("working")
    });
  
  
  // PIUT
  router.put('/:_id', async (req, res) => {

    
    res.send("working");
  });
  
  router.delete('/:_id', async (req, res) => {
  
    res.send("working");
  });
  
  router.get('/:_id', async (req, res) => {
  
    res.send("working");
  });
  
  
 
  module.exports = router;
  
  