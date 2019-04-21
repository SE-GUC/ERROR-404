import React, { Component } from 'react';
import './Chatbars.css';
import Header from './Header';
import Toolbar from '../../layout/Toolbar/Toolbar';
import Background from '../../Images/background.jpeg';
class Chatbars extends Component {
  constructor() {
    super();
    this.state = {
      chatbars: [],
      
    };
    
  }
  

  componentDidMount() {
      fetch('/api/Chatbars/')
      .then(res => res.json())
      .then(chatbars => this.setState({chatbars: chatbars.data}, () => console.log('chatbars fetched...', chatbars)));
  }
  getStyle = () => {
    return {
      backgroundImage:Background,
      padding: '10px',
      textAlign: 'center'
    }
  }
  
  render() {
    
    return (
     
      <div style={this.getStyle()} >
        <div>
          <Toolbar/>
        <Header />
      </div> 
      
        <ul style={{color:"white"}}>
        {this.state.chatbars.map(chatbar => 
          <a key={chatbar._id} href={'/addResponse/'+chatbar._id}> {chatbar.debateLiveTitle} {chatbar.date} <br></br> </a>
        )}
        
        </ul>
        <button className="btn" style={ {position:"absolute", left:"0", bottom:"0"}} onClick={() => (document.location.href = "/deleteChatBar")}>
          UPDATE AND DELETE
        </button> 
      </div>
      
        
      
      
    )
  }
}


export default Chatbars;
