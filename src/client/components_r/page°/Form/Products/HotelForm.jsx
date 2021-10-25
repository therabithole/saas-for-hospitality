import React, { Component } from 'react';
import Joi from 'joi-browser';
import BaseForm from '../BaseForm';

import { getAmenities } from "../../../../../node/services/amenityService";
import { getHotel, saveHotel } from '../../../../../node/services/hotelService';

import Input from "../Input";
import Checkbox from "../Checkbox";



class HotelForm extends BaseForm {
    state = { 
             posts: [],
        data: {
            title: '',
            amenityId: '',
            rooms: '',
            price: '',
            numberInStock: '',
            
        },
        amenities: [],
        errors: {}
         }
    

joiFormSchema = 
         { 
        _id: Joi.string(),
        title: Joi.string().min(3).label('Please Enter name of your Hotel'),
        amenityId: Joi.string().label('Please Select Amenities'),
        rooms: Joi.number().min(1).max(1000).label('Please Enter Number of Rooms'),
        price: Joi.number().min(1).max(5000).label('Please Your Price Per Day'),
        numberInStock: Joi.number().min(1).label('Please Ener rooms left'),
         }
        
   
  async populateAmenities() {
    const { data: amenities } = await getAmenities();
    this.setState({ amenities });
  }

  async populateHotel() {
    try {
      const hotelId = this.props.match.params.id;
      if (hotelId === "new") return;

      const { data: hotel } = await getHotel(hotelId);
      this.setState({ data: this.mapToViewModel(hotel) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }  
  
async componentDidMount() {
        
        this.populateAmenities();
        this.populateHotel(); 
     }
     
             
mapToViewModel(hotel) {
 
        return {
            _id: hotel._id,
            title: hotel.title,
            amenityId: hotel.amenity._id,
            price: hotel.price,
            rooms: hotel.rooms,
            numberInStock: hotel.numberInStock
        }        }
     


doSubmit = async () => {
           // console.log("Form Submission Console", this.state.data)
           await saveHotel(this.state.data);
            
            this.props.history.push("/hotels") // redirect us
            
        }
    render() { 
              
             
              
        return ( 
                <React.Fragment> 
               
              
                 <form onSubmit={this.handleSubmit}>
                
                 {/* {this.renderInput('name', 'title', 'type' )}  */}
                 {this.renderInput('title', 'Enter Hotel name' )}
                {this.renderInput('rooms', 'Rooms' )}
                {this.renderInput('price', 'Price / Night' )}
                {this.renderInput('numberInStock', 'Number in Stock' )}
                {this.renderSelect("amenityId", "Amenity", this.state.amenities)}
                {this.renderButton('Save Hotel')} 
             
                </form>  
                </React.Fragment> );
    }
}
 
export default HotelForm;

/* 
<Input 
                name="name" 
                title={"Enter your Hotel Name"}
                type="text"
                value={data.title}
                onChange={this.onTyping}
                error={errors.title}/>
                 <Input 
                name="rooms" 
                title={"Enter Rooms"}
                type="number"
                value={data.rooms}
                onChange={this.onTyping}
                error={errors.rooms}/>
                 <Input 
                name="price" 
                title={"Enter Price / Night in Rs"}
                type="number"
                value={data.price}
                onChange={this.onTyping}
                error={errors.price}/>
*/