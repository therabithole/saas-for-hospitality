import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CreateListing extends Component {
    state = {  }
    render() { 
        return ( <section> <section> <h1> Add a place to TripAdvisor </h1> </section> 
                
                <section>
                <h2> General Information </h2> 
                <p> <strong> Thank you for telling us about a new place to list on Tripadvisor.
                Your contributions make our traveler community stronger.</strong></p>
               <p>  To get started, tell us a little bit more about the place.</p>
               <p> <strong>   What kind of place is this? (View our listing guidelines) </strong> </p></section> 
               <section>
<Link to="/listaccomodation"> <button> List an Accommodation </button> </Link>               
                <button> List a Restaurant </button> 
                <button> List a Vacation Rental </button>
                <button> List a Rental Car</button>
               
                 </section> </section> 
               );
               }
}
 
export default CreateListing;