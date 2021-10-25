import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import 'font-awesome/css/font-awesome.css'


// Components
import Hamburger from "./client/components_r/page°/menu+nav/Hamburger";

// pages
import Home from "./client/pages/Home";
import CreateListing from "./client/pages/CreateListing";
import ListAccomodation from "./client/pages/ListAccomodation";

import Hotels from "./client/pages/Hotels";
import Restaurants from './client/pages/Restaurants';
import Flights from "./client/pages/Flights";
import ThingsToDo from "./client/pages/ThingsToDo";
import NotFound from "./client/pages/NotFound";
import Navigation from './client/components_r/page°/menu+nav/Navigation';


import Owners from "./client/pages/Owners";

 import SupplierLogin from "./client/pages/suppliers/SupplierLogin";
 import SupplierRegister from "./client/pages/suppliers/SupplierRegister";
 
import Dashboard from './client/pages/suppliers/Dashboard';
import Customers from './client/pages/customers/Customers';


import HotelForm from "./client/components_r/page°/Form/Products/HotelForm";


function App() {
  return (
    <div className="react-app">
   <Navigation/>   
   <Hamburger/>
   <Switch> 
 
   <Route path="/hotels" component = {Hotels}/>
   <Route path="/restaurants" component = {Restaurants}/>
   <Route path="/thingstodo" component = {ThingsToDo}/>
   <Route path="/flights" component={Flights}/>
   <Route path="/customers" component = {Customers}/>
   <Route path="/owners" component ={Owners}/>
   <Route path="/createlisting" component={CreateListing}/>
   <Route path="/listaccomodation" component={ListAccomodation}/>
   <Route path="/customers/register" component ={NotFound}/>
   <Route path="/customers/login" component ={NotFound}/>
   <Route path="/suppliers/register" component = {SupplierRegister}/>
  <Route path="/suppliers/login" component ={SupplierLogin}/>
   <Route path="/suppliers/dashboard" component={Dashboard}/>
   <Route path="/" exact component={Home}/>
   <Route path="/not-firfound" component={NotFound}/>
  
   <Redirect to ="/not-found"/>
   </Switch>
    </div>
  );
}

export default App;
