import React, { Component } from 'react';
import axios from 'axios';
import Questions from './Questions';
import NavbarSignedIn from "../../layout/NavbarSignedIn";

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
    axios.get('http://localhost:5000/api/Questions/user/' +"blala" )
    .then(res => this.setState({ Questions: res.data.data }))
    }
    
  
    ask = (ask) => {
      console.log("pp")
      axios.post('http://localhost:5000/api/Questions/ask',
      { "question":ask,
        "user":"blala"
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
    return (
        <div className="Questions">
         <NavbarSignedIn />

          <div className="container">
            <h1>Your recently asked Questions</h1>      
            <Questions  Questions={this.state.Questions}  />

            <form  onSubmit={this.onSubmit} >
            <p style={{fontSize:'30px'}}>Another Question ??   </p>
            <label style={{paddingBottom:'40px'}}>
                    <input
                       type="text"
                        name='ask'
                        value={this.state.ask}
                        style={{width:'300px'}}

                        onChange={this.onChange}/>
                </label>
            <input 
          type="submit" 
          value="Submit" 
          className="btn"/>
        </form>

          </div>  
        </div>
   
    );
  }
}

export default Question;
	
