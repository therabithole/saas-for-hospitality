import React, { Component } from 'react';
import axios from "axios"
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

// import Hamburger from '../components_r/page°/menu+nav/Hamburger';
const createHotel = async () => {
    const obj = {name: 'New Hotel - Axios Form', price: 150}
    const {data: post} = await axios.post(apiEndpoint, {obj})
   const posts = [post, ...this.state.posts];
   this.setState({posts: this.state.posts});
   console.log(this.state.posts)
}

const updateHotel = async (post) => {
    post.title = "UPDATED"
    const {data} = await axios.put(apiEndpoint + '/' + post.id, post)
    console.log(data)
    
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = {...post}
    this.setState(posts)
    
}

const deleteHotel = async post => {
   await axios.delete(apiEndpoint + '/' + post.id);
   const posts = this.state.posts.filter(p => p.id !== post.id);
   this.setState({posts})
}

class Home extends Component {
    state = {
        data: []
      }

   async componentDidMount() {
        console.log('home page mounted')
     //  const result = await axios.get(apiEndpoint)
       // const {data} = result;
      
      
    }
    
    render() { 

        const {data } = this.state;

        return ( <section className="content home"> <section> Home section
                {data.map(post => (<h1> {post} Hello</h1>))}
                </section>  </section> );
    }
}
 
export default Home;