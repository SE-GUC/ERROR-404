import React, { Component } from 'react';
//import Chatbars from './components/Chatbars';
import './App.css';
import Chatbars from './components/chatBar/Chatbars';


class App extends Component {
 
  render() {
    return (
      <div className="App">
        
        <Chatbars />
        
      </div>
    );
  }
}

export default App;
