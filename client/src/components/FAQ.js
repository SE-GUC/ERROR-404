import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import FAQs from './FAQs';
import AddFaq from './AddFaq';

import axios from 'axios';


class FAQ extends Component {
  state={
      FAQs:[]
  }
  componentDidMount()  {
    axios.get('http://localhost:3002/api/FAQs')
    .then(res => this.setState({ FAQs: res.data.data }))
  }
  addFAQ = (question,answer) => {
    axios.post('http://localhost:3002/api/FAQs/add', {
      question,
      answer
    })
      .then(res => this.setState({ FAQs: [...this.state.FAQs, res.data.data] }));
  }
  render() {
    return (
     
        <div className="FAQ">
          <div className="container">
            <h1>FAQs</h1>      
            <AddFaq addFAQ={this.addFAQ} />       
            <FAQs  FAQs={this.state.FAQs}  />
             
          </div>  
        </div>
   
    );
  }
}

export default FAQ;