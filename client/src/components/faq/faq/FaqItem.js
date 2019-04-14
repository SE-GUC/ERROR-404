import React, { Component } from 'react';
import SimplePopper from './SimplePopper'

export class FaqItem extends Component {

 


  render() {
    
   const { _id,question,answer} = this.props.faq;
    return (
      <div >
        <p style={questionStyle}>
            { question }
       </p>   
      <p style={answerStyle}>
            { answer }
          
        </p> 
        <SimplePopper p={this.SimplePopper}   delfaq={this.props.delfaq}  updatefaq={this.props.updatefaq} faq={this.props.faq} />
        
      </div>
    )
  }
}


const questionStyle={
  texttransform: 'uppercase',
  lineheight: '0.8'
}
const answerStyle={
  texttransform: 'capitalize'
}


export default FaqItem