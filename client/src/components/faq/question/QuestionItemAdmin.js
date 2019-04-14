import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export class QuestionItemAdmin extends Component {

  state = {
    question: ' ',
    answer:' '
};
onChange= (e) => this.setState({[e.target.name]: e.target.value});



  render() {
   const { _id,question} = this.props.question;
    return (
      <div >
        <p>
            { question }
            <br></br>
        </p>
            <form>
                
                <label>
                    <input 
                        type="text"
                        name='answer'
                        value={this.state.answer} 
                        onChange={this.onChange}/>
                </label>
                
            </form>
            <button    onClick={this.props.answerQuestion.bind(this,_id,this.state.answer)} >Answer</button>
            <button    onClick={this.props.delQuestion.bind(this, _id)}  >Delete</button>
      </div>
    )
  }
}



export default QuestionItemAdmin