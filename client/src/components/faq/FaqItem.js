import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FaqItem extends Component {


  render() {
   const { question, answer } = this.props.faq;
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



export default FaqItem