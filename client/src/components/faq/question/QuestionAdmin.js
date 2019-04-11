import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuestionsAdmin from './QuestionsAdmin';

import axios from 'axios';


class QuestionAdmin extends Component {
  state={
      Questions:[]
  }
  componentDidMount()  {
    axios.get('http://localhost:5000/api/Questions/admin')
    .then(res => this.setState({ Questions: res.data.data }))
  }
  delQuestion = (id) => {
    axios.delete('http://localhost:5000/api/Questions/'+id)
      .then(res => this.setState({ Questions: [...this.state.Questions.filter(question => question._id !== id)] }));
 
}

answerQuestion = (id,answer) => {
  
  axios.put('http://localhost:5000/api/Questions/answerquestion/'+id,
  {
    "answer":answer
  })
  .then(res => {
    axios.get('http://localhost:5000/api/Questions/admin')
    .then(res => this.setState({ Questions: res.data.data }))
   
  });

}
 
  render() {
    return (
     
        <div className="QuestionAdmin">
          <div className="container">
            <h1>Questions</h1>      
            <QuestionsAdmin  Questions={this.state.Questions} delQuestion={this.delQuestion} answerQuestion={this.answerQuestion} />
             
          </div>  
        </div>
   
    );
  }
}

export default QuestionAdmin;