import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from "axios"
import "./profile.css"
import Toolbar from "../../layout/Toolbar/Toolbar"
import {Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
    return { token: state.token, usertype: state.usertype, id: state.id };
  };
class profile extends Component { 
   
  constructor(props)
  {
    super(props);
    this.state = {
       user:{},
       id: this.props.id   
      //auth : true
    }
  }

  componentDidMount()
  {
     const id = this.state.id
     console.log(id)
     axios.get(`/api/Users/${id}`)
     .then(user=>this.setState({user : user.data.data},()=>console.log("fetched",user.data.data)))
     .catch(console.log('cannot fetch'))
  }
  
  handleClick =() => {
    this.props.history.push("/signin");
 };
  render()
  {
    if (this.props.token == null) {
      return (
        <div>
          <Toolbar />
          <div class="thumbnails">
            <div class="box">
              <div class="inner">
                <h3>You have to sign in first!</h3>
                <button
                  variant="contained"
                  onClick={() => {
                    this.handleClick();
                  }}
                  className="btn"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else{
    return(
  <div className="profilePage7">
      <Toolbar/>
      <Container className="nadin">
      <ul className="profile7">
      <image src={this.state.user.profilePicture} className="profilepic7"></image>
      <br/>
     <p className="Name">Name: {this.state.user.firstName} {this.state.user.lastName}</p>
     <br></br>
     <p className="Email">Email: {this.state.user.email}</p>
     <br></br>
     <p className="BD">birthday: {this.state.user.birthDate}</p>
     <br></br>
     <p className="C">clubs:{this.state.user.clubs}</p>
     <br/>
     <p className="B">Bio: {this.state.user.bio}</p>
     <br/>
     <p className="T">Type: {this.state.user.type}</p> 
    </ul>   
    </Container>
  </div>
  )
  }}
}
const Form = connect(
    mapStateToProps,
    null
  )(profile);
  export default Form;