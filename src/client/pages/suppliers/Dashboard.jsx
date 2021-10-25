import React, { Component } from 'react'
import {Route, Link} from "react-router-dom";
import axios from "axios";
import SupplierUsers from "./SupplierUsers";
import SupplierAdmins from './SupplierAdmins';
import SupplierNav from "./SupplierNav";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

const createAccomodation = () => {
    console.log("working")
}

const updateAccomodation = () => {
    console.log("working")
}

const deleteAccomodation = () => {
    console.log("working")
}
class Dashboard extends Component {
    constructor(props) {
        super(props);
      this.state = {
    posts: []
    }
  }
  async componentDidMount() {
    const {data: posts} = await axios.get(apiEndpoint);
    this.setState({posts})

  }
    
                        
    render() { 
              const {match} = this.props;
              
        return (  <React.Fragment>
            <section>
                
        <h1> Supplier Dashboard </h1>
        <SupplierNav/>
        <Route path="/suppliers/dashboard/admin" component={SupplierAdmins}/>
        <Route path="/suppliers/dashboard/users" component={SupplierUsers}/>
        
        </section>         
        <section>
        <table>
<thead>
  <tr>
    <th>Name</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
</thead>{this.state.posts.map((post=> 
  
<tbody>
  <tr>
    <td>{post.title}</td>
    <td> <button> Update Settings </button> </td>
    <td> <button> Delete My Hotel </button> </td>
    </tr>
</tbody>
))}
</table>
        </section>
        </React.Fragment> );
    }
}
 
export default Dashboard;
