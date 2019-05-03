import React, { Component } from 'react';
import axios from 'axios';
import Questions from './Questions';
import NavbarSignedIn from "../../layout/NavbarSignedIn";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Navbar from '../../layout/Navbar';
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};


class Question extends Component {
  
  state={
      Questions:[],
      ask:'',
      
      
  }
  
  componentDidMount()  {
      
    this.get(this.state.id )
   
  }
  get = () => {
    axios.get('/api/Questions/user/' +this.props.id )
    .then(res => this.setState({ Questions: res.data.data }))
    }
    
  
    ask = (ask) => {
      console.log("pp")
      axios.post('/api/Questions/ask',
      { "question":ask,
        "user":this.props.id
      })
      
    
    }
  

onChange= (e) => this.setState({[e.target.name]: e.target.value});

onSubmit = (e) => {
  console.log("kk")
  e.preventDefault();
  this.ask(this.state.ask,this.state.id);
  this.setState({ ask: '' 
  
  });
}



  render() {

    if (this.props.token == null) {
      return (
        <div>
          <Navbar/>
          <div class="thumbnails">
            <div class="box">
              <div class="inner">
                <h3>You have to sign in first!</h3>
                <button
                  variant="contained"
                  onClick={<Link to="/signin" />}
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
        <div className="Questions">
         <NavbarSignedIn />

          <div className="container">
            <h1 style={{paddingRight:'500px',boxAlign:"inline",color:"#3e3939bf"}}>YOUR QUESTIONS</h1>   
            <br></br>   
            <Questions  Questions={this.state.Questions}  />

            <form  onSubmit={this.onSubmit} >
            <p style={{fontSize:'30px',color:"#3e3939bf"}}>Another Question ??   </p>
            <label style={{paddingBottom:'40px'}}>
                    <input
                       type="text"
                        name='ask'
                        value={this.state.ask}
                        style={{width:'300px',backgroundColor:'#efefef'}}
                        placeholder="Add Question ..."

                        onChange={this.onChange}/>
                </label>
            <input 
          type="submit" 
          value="Submit" 
          style={{backgroundColor:"#70c7be"}}

          className="btn"/>
        </form>

          </div>  
        </div>
   
    );
    }
  }
}

const Form = connect(
  mapStateToProps,
  null
)(Question);
export default Form;
		
