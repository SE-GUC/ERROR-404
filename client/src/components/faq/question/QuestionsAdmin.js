import React, { Component } from 'react';
import QuestionItemAdmin from './QuestionItemAdmin';

class QuestionsAdmin extends Component {
  render() {
    return this.props.Questions.map((question) => (
      <QuestionItemAdmin key={question._id} question={question} delQuestion={this.props.delQuestion} answerQuestion={this.props.answerQuestion} />
    ));
  }
}


export default QuestionsAdmin;