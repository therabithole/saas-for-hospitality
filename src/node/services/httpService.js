import axios from 'axios';
import ravenLogger from "./sentryService";
import {toast} from "react-toastify"

 axios.interceptors.response.use(null, error => {
    
    const expectedError = 
    error.response && 
    error.response.status >= 400 &&
    error.response.status < 500;    
    
    if(!expectedError) {
       ravenLogger.ravenLogger(error)
         toast.error("An unexpected error occurred")
        
    }
    return  {
      console: console.log("Expected Error (400- 500) Occured"),
      message: error.message
      // Promise.reject(error)
    } 
});


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}
/*

// axios.intercepttors.response.use(success, error => { // not logging successful requests
  axios.interceptors.response.use(null, error => { 
             
             //  console.log("Axios Interceptor catching error")
          
          // whatever was used in catch block for unex
           const expectedError = error.response && error.response.status >=400 && error.response.status < 500
           
           if (!expectedError)
           // between 400 and 500 normal error type, no alert/log error
           return Promise.reject(error)
        
          //  Only use for unexpected errors, so between 400 and 500 normal error type
           
            console.log("Logging the eror", error);
            alert("Unexpected Error")
           return Promise.reject(error);
})
  
*/ 