import React, { Component } from 'react';
//import axios from 'axios';
//import UserProfile from './UserProfile'
import {BrowserRouter as Router,Link} from 'react-router-dom'
//import { pathToFileURL } from 'url';
//import Route from 'react-router-dom'

class AllUsers extends Component { 
  constructor(props)
  {
    super(props);
    this.state = {
       users:[],
    
      //auth : true
    }

  }
  componentDidMount()
  {
     fetch('/api/Users/')
    .then(res=>res.json())
    .then(users=> this.setState({users : users.data},()=>console.log("fetched",users.data)));
  }

  
  render()
  {
    const userList=this.state.users.map((user)=>{
    return(
      <Router>
      <Link to ={{pathname:'/users/'+user._id}}>{user.firstName} {user.lastName}
      </Link>
      <br/>
      </Router>
     
    )
  })
  return <ul>{userList}</ul>
}}
    

//import UserProfile from './UserProfile';
export default AllUsers
  
    
  