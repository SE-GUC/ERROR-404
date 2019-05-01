//const user = require('../../../../routes/api/Users')
//import dr from 'react-bootstrap' 
import axios from 'axios';
//import Users from './Users' 

import React, { Component } from 'react';
//import Users from './Users';
//import {BrowserRouter as Router} from 'react-router-dom'
//import Route from 'react-router-dom'
import "./UserProfile.css"

class UserProfile extends Component { 
   
  constructor(props)
  {
    super(props);
    this.state = {
       user:{},
    
      //auth : true
    }
  }

  componentDidMount()
  {
     const id = this.props.match.params.id
     axios.get(`/api/Users/${id}`)
     .then(user=>this.setState({user : user.data.data},()=>console.log("fetched",user.data.data)))
     .catch(console.log('cannot fetch'))
  }
  
  render()
  {
    return(
  <div>
    <ul>
     <p>Name: {this.state.user.firstName} {this.state.user.lastName}</p>
     <br></br>
     <p>Email: {this.state.user.email}</p>
     <br></br>
     <p>birthday: {this.state.user.birthDate}</p>
     <br></br>
     <p>clubs:{this.state.user.clubs}</p>
     <br/>
     <p>Bio: {this.state.user.bio}</p>
     <br/>
     <image src={this.state.user.profilePicture} className="image"></image>  
    </ul>
  </div>
  )
  }
}

export default UserProfile