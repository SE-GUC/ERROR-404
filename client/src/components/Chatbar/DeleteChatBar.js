import React, { Component } from 'react';
import axios from 'axios';
import './Chatbars.css';

export class DeleteChatBar extends Component {
        constructor() {
          super();
          this.state = {
            chatbars: []
          };
          
        }
  componentDidMount() {
      fetch('/api/Chatbars/')
      .then(res => res.json())
      .then(chatbars => this.setState({chatbars: chatbars.data}, () => console.log('chatbars fetched...', chatbars)));
  }
 
    deleteDebateLive= (id)=> {
        axios.delete(' http://localhost:5000/api/Chatbars/'+id)
        .then(this.setState({chatbars: [...this.state.chatbars.filter(chatbar => chatbar._id !== id)]}))
    
      } 
      render() {
        return (
                
        this.state.chatbars.map(chatbar => 
          <li key={chatbar._id}>{chatbar.debateLiveTitle} 
           <input 
                  type="Submit" 
                  value="delete"
                  className="btn"
                  onClick= {this.deleteDebateLive.bind(this,chatbar._id)}

                  style={{flex: '1'}}
                  />
          
          </li>
          
        )
        
           
        )
      }
}

export default DeleteChatBar
