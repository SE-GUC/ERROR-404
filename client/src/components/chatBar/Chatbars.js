import React, { Component } from 'react';


class Chatbars extends Component {
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
  render() {
    return (
      <div>
        <h2>Chatbar</h2>
        <ul>
        {this.state.chatbars.map(chatbar => 
          <li key={chatbar._id}>{chatbar.debateLiveTitle}{chatbar.date} </li>
        )}
        </ul>
      </div>
    );
  }
}


export default Chatbars;
