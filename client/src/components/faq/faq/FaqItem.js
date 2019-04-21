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
  color:'black',
  lineHeight:'1',
  fontSize:'25px',
  fontFamily:'Arial'

}
const answerStyle={
  textTransform: 'capitalize',
  color:'black',
  lineHeight:'1',
  fontFamily:'Arial'


}


export default FaqItem