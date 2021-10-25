import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from "./Input";
import Select from "./Select";
import Checkbox from "./Checkbox";

class BaseForm extends Component {
    state = 
    { 
    data: {},
    errors: {}
    }

onTyping =  ({currentTarget: input }) => {
    
    const errors = {...this.state.errors}
    const errorMessage = this.validateFields(input)
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]
    
        // e.currentTarget {}
        const data = {...this.state.data};
        data[input.name] = input.value;
       
//        console.log(data)
        
        this.setState({data, errors})
        
    }


    
validateFields = ({name, value}) => {
    const obj = {[name]: value}
    const fieldSchema = {[name]: this.joiFormSchema[name]} 
    const {error} = Joi.validate(obj, fieldSchema)
    return error ? error.details[0].message : null;
    }
            
  validateForm = () => {
    const result = Joi.validate(this.state.data, this.joiFormSchema, {abortEarly: false})
    if (!result.error)return null   
    const errors = {};
                
    for (let item of result.error.details)
    errors[item.path[0]] = item.message
                
    return errors; }
            
      
    handleSubmit = event => {
        event.preventDefault();
        console.log("default full page reload prevented ")
        
        const setErrors= this.validateForm()
     
        this.setState({errors: setErrors || {}});
        console.log(setErrors, "Any Error");
        
     this.doSubmit();
     
    }
    
   
renderInput( name, label, type="text") {
    
     
    const {data, errors} = this.state;
    
 return ( 
    <Input 
    name={name} 
    label={label}
    type={type}
    value={data[name]}
    onChange={this.onTyping}
    error={errors[name]}/>)
    
}
 
             
 renderSelect(name, label, options) {
     const {data, errors} = this.state;
     
     return(<Select 
            name={name}
            value={data[name]}
            label={label} 
            options={options}
            onChange={this.onTyping}
            error={errors[name]}    />)
     
 } 
 
 renderCheck(name, label, options) {
     const {data, errors} = this.state;
     
     return(<Checkbox
        name={name}
        value={data[name]}
        label={label} 
        options={options}
        onChange={this.onTyping}
        error={errors[name]}    />)
 }
       
renderButton (label) { 
return (<button
     className="btn btn-primary"> 
    {label} </button>)}


}
 
export default BaseForm;