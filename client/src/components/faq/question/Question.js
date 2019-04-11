import React, { Component } from 'react';
import axios from 'axios';
import Questions from './Questions';

class Question extends Component {
  state={
      Questions:[],
      ask:'',
      id:"dskjflkdf"
  }
  
  componentDidMount()  {
      
    this.get(this.state.id )
   
  }
  get = (id) => {
    axios.get('http://localhost:5000/api/Questions/user/'+id )
    .then(res => this.setState({ Questions: res.data.data }))
    }
    
  
    ask = (ask,id) => {
      console.log("pp")
      axios.post('http://localhost:5000/api/Questions/ask',
      { "question":ask,
        "user":id
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
          <div className="container">
            <h1>Your recently asked Questions</h1>      
            <Questions  Questions={this.state.Questions}  />
             
            <form onSubmit={this.onSubmit} >
            <label>
                    <input
                       type="text"
                        name='ask'
                        value={this.state.ask}
                        onChange={this.onChange}/>
                </label>

            {/* <button    onClick={this.ask(this.state.ask)} >Send</button> */}
          
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
	
