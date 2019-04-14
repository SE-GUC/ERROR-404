import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export class QuestionItem extends Component {

  state = {
    question: ' ',
    answer:''
};


  render() {
   const { question,answer} = this.props.question;
    return (
      <div >
        <p>
            { question }
            <br></br>
            { answer }
        </p>
     
      </div>
    )
  }
}


export default QuestionItem