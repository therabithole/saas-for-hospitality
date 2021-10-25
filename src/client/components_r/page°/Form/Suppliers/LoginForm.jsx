import React, { Component } from 'react';
import Input from "../Input";
import Joi from 'joi-browser';
import BaseForm from "../BaseForm"
import {login} from "../../../../../node/services/authService"

class LoginForm extends BaseForm {
    state = { 
             data : 
        {email: "",
              password: ""
              } ,
             errors: {}
            }
    
    
    joiFormSchema = 
    {
    email: Joi.string().email().required().label('Business Email'),
     password: Joi.string().required().label('Desired Password')
        
    }
    
     
    doSubmit = async () => {
           //console.log(this.state)
           
        try {
            const {data} = this.state;
            //const data is already ssigned , pick json token from await/promise header
           const {data: jwt} = await login(data.email, data.password);
           console.log(jwt);
           
           localStorage.setItem('token', jwt);
           
            
        } catch (ex) {
            if(ex.response && ex.response.status === 400) {
                const errors = {...this.state.errors};
                errors.email = ex.respone.data;
                this.setState({errors});
            }
        }
         
           
    }
    render() { 
              
              const {data, errors} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                
               {/* {this.renderInput('name', 'label', 'type' )}  */}
               
                {this.renderInput('email', 'Enter business email' )}
                {this.renderInput('password', 'Enter your Password1', "password")}
                 {this.renderButton('Login as a Business')}
            </form>
            );
    }
}
 
export default LoginForm;

/* 

htmlFor: is linked to id : and is for clicking which field is relat*ed/
/* to link typeed input and put it in state*/
/*  create value = this.sate and then link using onChange */
/* name s to ref e.vcurrentTarget.name */


/* 

<div className="form-group">
                <label htmlFor="username"> Username </label>
                <input
                className="form-control"
                id="username"
                type="text"
                value = {this.state.account.username} 
                onChange={this.onChange}
                name='username'
                />
                </div>
                
                
                <div className="form-group">
                <label htmlFor="password">Password </label>
                <input id="password"
                type="text" 
                value = {this.state.account.password} 
                onChange={this.onChange}
                name='password' 
                className="form-control"/>
                </div>
                
*/


/* 

<Input 
                name="name" 
                title={"Enter business name"}
                type="text"
                value={data.name}
                onChange={this.onChange}
                error={errors.name}/>
                <Input 
                name="email" 
                title={"Enter business email"}
                type="email"
                value={data.email}
                onChange={this.onChange}
                error={errors.email}/>
                 
                 <Input 
                
                name="password" 
                title={"Enter your Password"}
                type="password"
                value={data.password}
                onChange={this.onChange}
                error={errors.password}/>
               
*/