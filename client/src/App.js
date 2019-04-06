import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import FAQ from './components/FAQ';
import './App.css';



class App extends Component {
  render() {
    return (
     
        <div className="App">
          <div className="container">
            <FAQ/>
             
          </div>  
        </div>
   
    );
  }
}

export default App;