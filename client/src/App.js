import React, { Component } from 'react';
import Chatbars from './components/chatBar/Chatbars';
import Header from './components/layout/Header';

class App extends Component 
{
  
 
  render() {
    return (
      <div className="App">
      <div className="container">
         <Header />
         <Chatbars />
      </div>
      </div>
        
    );
  }
}

export default App;
