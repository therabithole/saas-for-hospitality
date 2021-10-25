import React, { Component } from 'react';
import Input from "../Input";
import Joi from 'joi-browser';
import BaseForm from '../BaseForm';
import * as userService from "../../../../../node/services/userService";

class RegisterForm extends BaseForm {
    state = { 
             data: {
                 name: '',
                 email: '',
                 password: ''
             },
             errors: {}
              }
    
              joiFormSchema = 
              { name: Joi.string().min(3).required().label('Desired Business Name'),
              email: Joi.string().email().required().label('Desired Business Email'),
               password: Joi.string().required().label('Desired Password')
                  
              }
              
              doSubmit = async () => {
                try {
                    await userService.register(this.state.data)   
                } 
                
                catch (ex) {
                    if(ex.response && ex.response.tatus === 400) {
                        const errors = {...this.state.errors}
                        errors.email = ex.response.data;
                        this.setState = ({errors});
                    }
                    
                }
            }
              
    render() { 
        const {data, errors} = this.state;
    
        return ( 
            <form onSubmit={this.handleSubmit}>
            {/* {this.renderInput('name', 'label', 'type' )}  */}
             {this.renderInput('name', 'Enter business name' )}
            {this.renderInput('email', 'Enter business email' )}
            {this.renderInput('password', 'Enter your Password1', 'password' )}
            {this.renderButton('Register your Business')}
           
            </form>    );
    }
}
 
export default RegisterForm;