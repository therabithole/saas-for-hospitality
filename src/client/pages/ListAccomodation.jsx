import React, { Component } from 'react';
import {toast} from "react-toastify";
import axios from 'axios';
import {ToastContainer} from "react-toastify";

import "react-toastify/dist/ReactToastify.css"
import GoogleMaps from "../components_r/component°/GoogleMaps";
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import {FormikConfig,useFormik, FormikValues} from 'formik';
import {Card, CardContent, Typography} from "@material-ui/core";
import {CheckboxWithLabel, TextField} from "formik-material-ui";
import Select from 'react-select';


import http from "../../node/services/httpService"; // axios.methods and interceptors
import config from "../../node/services/config.json"


 const apiEndpoint = "https://jsonplaceholder.typicode.com/posts"; 

class ListAccomodation extends Component {
  constructor(props) {
    super(props);
   this.state = { 
            posts: [],
             data: {},
             businessRep: false,
             amenities: [],   
             errors: {}
             }}
    
  async componentDidMount() {

//    const {data: posts} = await axios.get(apiEndpoint);
//     const {data: posts} = await http.get(apiEndpoint);
      const {data: posts} = await http.get(config.apiEndpoint);
    this.setState({posts})
 

  }
  
  
createAccomodation = async () => {
  const obj =  {title: "You have a New Hotel - Monthly Stay", body: "b"};
//  const {data: post} = await axios.post(apiEndpoint, obj);
//  const {data: post} = await http.post(apiEndpoint, obj);
const {data: post} = await http.post(config.apiEndpoint, obj);

  const posts = [post, ...this.state.posts]
  this.setState({posts})
  toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  
}

updateAccomodation = async post => {
  post.title = "You edited and updated Hotel/info";
//  const {data: post} =await axios.put(apiEndpoint + "/" + post.id, post );
   //console.log(post)
  // await http.put(apiEndpoint + "/" + post.id, post );
  await http.put(config.apiEndpoint + "/" + post.id, post );
  // update state and UI
  const posts = [...this.state.posts];
  const index = posts.indexOf(post);
  posts[index]= {...post} 
  this.setState({posts})
}

deleteAccomodation = async (post) => {
  
  const originalPosts = this.state.posts;
  
  const posts = this.state.posts.filter(p=> p.id !== post.id);
  this.setState({posts})
  
  try {
    ///await axios.delete(apiEndpoint + "/" + post.id);
    // await http.delete(apiEndpoint + "/" + post.id);
    await http.delete(config.apiEndpoint + "/" + post.id);
  } catch(ex) {
    
    //expected errors
    if(ex.response && ex.response.status === 404)
    alert("This accomodation has already been deleted");
    else {
      // moved inside axios,interceptors
     // console.log("Logging the eror");
     //  alert("Unexpected Error"); 
    }
    this.setState({posts: originalPosts})
  }
 
  
}
 
    render() { 
              
             
             
        return ( <React.Fragment> 
                  <ToastContainer/>
                   
               <Card> 
                <CardContent> 
                <Formik initialValues={{
                  officialPlaceName: "",
                  checking: false,
                  accomodationType: ""
                }}
                 onSubmit={()=> {}}>
                <Form>
                <section className="Place"> 
                <Field name="OfficialPlaceName" component ={TextField} label="Official Place Name"/> 
                
                </section>
                
                <Field name="checking" type="checkbox" component ={CheckboxWithLabel} Label={{ label: 'Checkbox Affialisted' }}/> 
                 <div id="checkbox-group">Are you affiliated with this place <br/> as an owner, 
                 employee, or official representative? </div>
                <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="accomodationType" value="Hotel" />
                  Hotel
                </label>
                <label>
                  <Field type="checkbox" name="accomodationType" value="Motel" />
                  Motel
                </label>
                <label>
                  <Field type="checkbox" name="accomodationType" value="Resort" />
                  Resort
                </label>
              </div>
    
                </Form> 
                </Formik>
                </CardContent>
                </Card>  
                <section> 
              
                <table>
<thead>
<button onClick={()=> this.createAccomodation()}> Add and Save New Accomodation</button> 
  <tr>
    <th>Name</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
</thead>{this.state.posts.map((post=> 
  
<tbody>
  <tr>
    <td>{post.title}</td>
    <td> <button onClick={()=> this.updateAccomodation(post)}> Update Settings </button> </td>
    <td> <button onClick={()=> this.deleteAccomodation(post)}> Delete My Hotel </button> </td>
    </tr>
</tbody>
))}
</table></section>       
                </React.Fragment>  );
    }
}
 
export default ListAccomodation;



