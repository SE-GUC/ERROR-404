import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import FAQs from './FAQs';
import AddFaq from './AddFaq';
import NavbarSignedIn from "../../layout/NavbarSignedIn";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import Navbar from "../../layout/Navbar";

import axios from 'axios';
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

class FAQ extends Component {
  state={
      FAQs:[]
  }
  
  handleClick = event => {
    let path = `/adminquestions`;
    this.props.history.push(path);
   
  };
  componentDidMount()  {
    axios.get('http://localhost:5000/api/FAQs')
    .then(res => this.setState({ FAQs: res.data.data }))
  }
  delfaq = (id) => {
    axios.delete('http://localhost:5000/api/FAQs/'+id)
      .then(res => this.setState({ FAQs: [...this.state.FAQs.filter(faq => faq._id !== id)] }));
 
}
updatefaq = (id,question,answer) => {
   axios.put('http://localhost:5000/api/FAQs/edit/'+id,
  {
    "answer":answer,
    "question":question
  })
  .then(res => {
    axios.get('http://localhost:5000/api/FAQs')
    .then(res => this.setState({ FAQs: res.data.data }))
  
  });

}
  addFAQ = (question,answer) => {
    axios.post('http://localhost:5000/api/FAQs/add', {
      question,
      answer
    })
      .then(res => this.setState({ FAQs: [...this.state.FAQs, res.data.data] }));
  }
  render() {
    const { classes } = this.props;

    if (this.props.token === null) {
      
      return (
        <>
          <Navbar />
          <div className="center-div">
            <h1>You need to sign in first to view this content</h1>
            <Button
              variant="contained"
              href="http://localhost:3000/signin"
              className={classes.button}
            >
              Sign In
            </Button>
          </div>
        </>
      );
    }
    else{
    return (
     
        <div className="FAQ">
        <NavbarSignedIn />

          <div className="container">
            <h1>FAQs <Button variant="contained"  style={edit} onClick={this.handleClick}>
            Questions     
            </Button></h1>      
            <AddFaq addFAQ={this.addFAQ} />
            <br></br>
            <FAQs  FAQs={this.state.FAQs} delfaq={this.delfaq} updatefaq={this.updatefaq} />
             
          </div>  
        </div>
   
    );
    }
  }
}
const edit={
  backgroundColor:'#5ec0b6' ,
  '&:hover': {backgroundColor: 'red'},
  paddingBottom:'5px',
  marginLeft:"1000px"
  
}
const Form = connect(
  mapStateToProps,
  null
)((FAQ));
export default Form;