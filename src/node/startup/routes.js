const express = require('express')
const home = require("../routes/home");
const amenities = require("../routes/amenities");
const departments = require("../routes/departments");
const hotels = require("../routes/hotels");
const crews = require("../routes/crews");
const flights = require("../routes/flights")
const customers = require("../routes/customers");
const bookings = require("../routes/bookings");
const users = require("../routes/users");
const auth= require('../routes/auth');



const error = require("../middleware/error")


module.exports = function (app) {
    // routes
    
    
app.use(express.json());
app.use(express.urlencoded({extended : true})) // for key=value &key=value advanced form fileds; extende ture
app.use('/', home);
app.use("/api/amenities", amenities);
app.use("/api/crews", crews);
app.use("/api/flights", flights);
// app.use("/api/departments", departments);
 app.use("/api/hotels", hotels);
// app.use("/api/customers", customers);
// app.use("/api/bookings", bookings);
// app.use("/api/users", users) // REGSIGTER
// app.use("/api/auth", auth);


   // LOGIN
app.use(error)



}

 