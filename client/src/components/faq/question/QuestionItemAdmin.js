import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import purple from '@material-ui/core/colors/purple';
import orange from'@material-ui/core/colors/orange';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


export class QuestionItemAdmin extends Component {

  state = {
    question: '',
    answer:''
};
onChange= (e) => this.setState({[e.target.name]: e.target.value});
handleClick = event => {
  let path = `/userquestions`;
  this.props.history.push(path);
 
};



  render() {
    
   const { _id,question} = this.props.question;
    return (
      <div >
        <p style={questionStyle}>
            { question }
            <br></br>
        </p>
            <form>
                
                <label>
                    <input 
                        type="text"
                        name='answer'
                        value={this.state.answer} 
                        placeholder="Add Answer ..."
                        style={{backgroundColor:'#efefef'}}
                        onChange={this.onChange}/>

                </label>
                
            </form>
            <button    onClick={this.props.answerQuestion.bind(this,_id,this.state.answer)} >Answer</button>
           
          
          <IconButton className={"classes"} aria-label="Delete"  onClick={this.props.delQuestion.bind(this,this.props.question._id)}>
          <DeleteIcon/> 
          </IconButton>
      </div>
    )
  }
}

const questionStyle={
  textTransform: 'uppercase',
  lineheight: '0.8',
  color:'#3e3939bf',
  lineHeight:'1',
  fontSize:'20px',
  fontFamily:'Arial'
}

export default QuestionItemAdmin