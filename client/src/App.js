import React, { Component } from 'react';
import AllContent from './components/AllContent';
import axios from 'axios';
import AddContent from './components/AddContent';
import './App.css';

class App extends Component {
  state = {
    allContent: ['content1', 'content2', 'content3','content4']
  }

  componentDidMount() {
    axios.get('/api/Contents')
      .then(res => this.setState({allContent:res.data.data}))
  }

  addContent = (content) => {
    axios.post('/api/Contents' , content)
      .then(res => this.setState({allContent: [...this.state.allContent, res.data.data]})); 
  }
  
  render() {
    return (
      <div className="App">
        <h1>ALL CONTENT</h1>
        <AllContent allContent = {this.state.allContent}/>
        <h1>ADD NEW CONTENT</h1>
        <AddContent addContent = {this.addContent}/>
      </div>
    );
  }
}

export default App;
