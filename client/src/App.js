import React, { Component } from 'react';
import AllClubs from './components/AllClubs';
import axios from 'axios';
import AddClub from './components/AddClub';
import './App.css';

class App extends Component {
  state = {
    allClubs: ['club1', 'club2', 'club3']
  }

  componentDidMount() {
    axios.get('/api/Clubs')
      .then(res => this.setState({allClubs:res.data.data}))
  }

  addClub = (club) => {
    axios.post('/api/Clubs' , club)
      .then(res => this.setState({allClubs: [...this.state.allClubs, res.data.data]})); 
  }
  
  render() {
    return (
      <div className="App">
        <h1>ALL CLUBS</h1>
        <AllClubs allClubs = {this.state.allClubs}/>
        <h1>ADD NEW CLUB</h1>
        <AddClub addClub = {this.addClub}/>
      </div>
    );
  }
}

export default App;
