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
  textTransform: 'uppercase',
  lineheight: '0.8',
  fontWeight:'bold',
  color:'#818888',
  lineHeight:'1',
  fontSize:'25px',

}
const answerStyle={
  textTransform: 'capitalize',
  color:'#c7c8c8',
  lineHeight:'1',


}


export default FaqItem