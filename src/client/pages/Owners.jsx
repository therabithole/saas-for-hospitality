import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Owners extends Component {
    state = { 
          category: {
            hoteliers: {},
            restaurants: {},
            tourOperators: {}  
              }          }
    
    componentDidMount() {
        console.log("Page is loaded")
    }
    
    render() { 
        return ( 
            <React.Fragment> <section> Welcome to Owners Listing</section>
            <section> 
            <h1> Claim Your Free Tripadvisor Listing  </h1> 
            <input
          type="search"
          placeholder="Location"
        />
        <input
          type="search"
          placeholder="Business Name"
        />
            <h2> Grow your business with free tools from Tripadvisor</h2>
            
           </section> 
           <section>
            <Link to="/createlisting"> Claim your Free Listing</Link >
             </section>  
             
             </React.Fragment>
                  );
    }
}
 
export default Owners;

