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
      <div style={questionStyle}>
        <p>
            { question }
         </p>
        <p style={answerStyle}>
            { answer }
        </p>
     
      </div>
    )
  }
}
const questionStyle={
  textTransform: 'uppercase',
  lineheight: '0.8',
  fontWeight:'bold',
  color:'black',
  lineHeight:'1',
  fontSize:'30px'


}
const answerStyle={
  textTransform: 'capitalize',
  color:'black',
  fontWeight:'normal',
  fontSize:'20px',

  lineHeight:'1'


}


export default QuestionItem