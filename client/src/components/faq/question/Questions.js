import React, { Component } from 'react';
import QuestionItem from './QuestionItem';
import PropTypes from 'prop-types';

class Questions extends Component {
  render() {
    return this.props.Questions.map((question) => (
      <QuestionItem key={question._id} question={question} />
    ));
  }
}


export default Questions;