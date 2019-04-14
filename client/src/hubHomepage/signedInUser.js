import React, { Component } from "react";
import "../App.css";
import NavbarSignedIn from "../components/layout/NavbarSignedIn";
import Footer from "../components/layout/Footer"
import AllClubs from "../components/Clubs/AllClubs";
import AllContent from "../components/Contents/AllContent";
import axios from "axios";

export class signedInUser extends Component {
    
  state = {
        allClubs: [],
        allContent: []
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/api/Clubs')
          .then(res => this.setState({allClubs:res.data.data}));
        
        axios.get('http://localhost:5000/api/Contents')
          .then(res => this.setState({allContent:res.data.data}));  
      }

  render() {
    return (
        <div className="App">
          <NavbarSignedIn />
          <h1>TIQ</h1>
          <nav className="navbar navbar-expand-sm navbar-dark bg-transparent mb-4">
            <div className="container">
              <AllClubs allClubs = {this.state.allClubs} />
            </div>
          </nav>  
          <AllContent allContent = {this.state.allContent} />
          <Footer />
        </div>
    )
  }
}

export default signedInUser
