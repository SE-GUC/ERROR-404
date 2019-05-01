import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import QuestionsAdmin from './QuestionsAdmin';
import NavbarSignedIn from "../../layout/NavbarSignedIn";
import { connect } from "react-redux";
import ToolBar from "../../../layout/Toolbar/Toolbar";
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

class QuestionAdmin extends Component {
  state={
      Questions:[]
  }
  componentDidMount()  {
    axios.get('http://localhost:5000/api/Questions/admin')
    .then(res => this.setState({ Questions: res.data.data }))
  }
  delQuestion = (id) => {
    axios.delete('http://localhost:5000/api/Questions/'+id)
      .then(res => this.setState({ Questions: [...this.state.Questions.filter(question => question._id !== id)] }));
 
}

answerQuestion = (id,answer) => {
  
  axios.put('http://localhost:5000/api/Questions/answerquestion/'+id,
  {
    "answer":answer
  })
  .then(res => {
    axios.get('http://localhost:5000/api/Questions/admin')
    .then(res => this.setState({ Questions: res.data.data }))
   
  });

}
 
  render() {
console.log(this.props.usertype)
    if (this.props.token == null) {
      return (
        <div>
          <div class="thumbnails">
            <div class="box">
              <div class="inner">
                <h3>You have to sign in first!</h3>
                <button
                  variant="contained"
                  onClick={<Link to= "/signin"/>}
                  className="btn"
                  style={{backgroundColor:"#70c7be"}}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }    
else{
  
    return (
     
        <div className="QuestionAdmin">
         <NavbarSignedIn />

          <div className="container">
            <h1 style={{paddingRight:'500px',boxAlign:"inline",color:"#3e3939bf"}}>QUESTIONS</h1>  
            <br></br>    
            <QuestionsAdmin  Questions={this.state.Questions} delQuestion={this.delQuestion} answerQuestion={this.answerQuestion} />
             
          </div>  
        </div>
   
    );
    }
  }
}
const Form = connect(
  mapStateToProps,
  null
)(QuestionAdmin);
export default Form;
