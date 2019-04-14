import React, { Component } from 'react';
import axios from 'axios';
import './Chatbars.css';
import Header from './Header';

class Chatbars extends Component {
  constructor() {
    super();
    this.state = {
      chatbars: [],
      debateLiveTitle: ''
    };
    
  }
  onSubmit= (e) => {
    e.preventDefault();
      // this.setState(this.state.debateLiveTitle);
    
       this.setState({debateLiveTitle:''})
}

onChange= (e) => this.setState({[e.target.name]: e.target.value});
  componentDidMount() {
      fetch('/api/Chatbars/')
      .then(res => res.json())
      .then(chatbars => this.setState({chatbars: chatbars.data}, () => console.log('chatbars fetched...', chatbars)));
  }
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      textAlign: 'center'
    }
  }
  addDebateLive = () => {
    axios.post('/api/Chatbars/create', {
        debateLiveTitle:this.state.debateLiveTitle
        
    })
      .then(res => this.setState({ chatbars: [...this.state.chatbars, res.data] }));
      
  }
  render() {
    
    return (
     
      <div style={this.getStyle()}  >
        <div>
        <Header />
      </div> 
      
        <form onSubmit={this.onSubmit} style= {{display: 'flex'}}>
                <input
                 type="text"
                 name="debateLiveTitle" 
                 style={{flex: '10' , padding: '5px'}}
                 placeholder="Add a new Debate live..."
                 value={this.state.debateLiveTitle}
                 onChange={this.onChange}
                 />
                 
                <input 
                  type="Submit" 
                  value="Create"
                  className="btn"
                  onClick= {this.addDebateLive}
                  style={{flex: '1'}}
                  />
            </form>
        <ul>
        {this.state.chatbars.map(chatbar => 
          <li key={chatbar._id}>{chatbar.debateLiveTitle} {chatbar.date} </li>
        )}
        </ul>
      
      </div>
      
    );
  }
}


export default Chatbars;
