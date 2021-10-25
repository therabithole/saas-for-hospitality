import React, { Component } from 'react';
const Input = ({name, label, type = 'text', value, onChange, error, ...rest}) => {
    
    return ( 
        <div className="form-group">
        <label htmlFor={name}> {label} </label>
        <input
        value = {value} 
        onChange={onChange}
        id={name}
        name={name}
        type={type}
        className="form-control"
        />
        
        {error && <article className="alert alert-danger error-message"> {error} </article>}
        </div>    
         );
}
 
export default Input;


/* 

htmlFor: is linked to id : and is for clicking which field is relat*ed/
/* to link typeed input and put it in state*/
/*  create value = this.state and then link using onChange */
/* name s to ref e.vcurrentTarget.name */


/* 


/* if form is not valid, disable button*/

