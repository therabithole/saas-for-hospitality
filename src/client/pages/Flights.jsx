import React, { Component } from 'react';
import axios from 'axios';
import {getFlights, saveFlight, deleteFlight} from "../../node/services/flightService";
import {getCrews} from "../../node/services/crewService";
import http from "../../node/services/httpService";



class Flights extends Component {
    
   
    state = { 
             flights: [],
             crews: [],
              }
   
   async componentDidMount() {
       
        
     const {data} = await getCrews()
        const crews = [{id: "", name: "All Crew Services"}, ...data];
  
        
        const {data: flights} = await getFlights();
        
        this.setState({flights, crews})
    console.log(flights, crews)
    }
    render() { 
           
    return (
      <React.Fragment> 
            <ul> {this.state.flights.map((flight)=> <li> {flight.departure}</li>)} </ul>
    <ul> {this.state.crews.map((crew)=> <li> {crew.service}</li>)} </ul>    </React.Fragment>  );
    }
}
 
export default Flights;