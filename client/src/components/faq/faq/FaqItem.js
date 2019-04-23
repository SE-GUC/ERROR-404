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
  color:'#3e3939bf',
  lineHeight:'1',
  fontSize:'25px',

}
const answerStyle={
  textTransform: 'capitalize',
  color:'#6d7173',
  lineHeight:'1',
  fontSize:'20px',


}


export default FaqItem