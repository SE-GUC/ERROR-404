import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import orange from'@material-ui/core/colors/orange';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


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
            <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon onClick={this.props.delQuestion.bind(this, _id)}/> 
      </IconButton>
      </div>
    )
  }
}



export default QuestionItemAdmin