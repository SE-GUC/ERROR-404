import React, { Component } from 'react';
import axios from 'axios';
import FAQUs from './FAQUs';

class FAQU extends Component {
  state={
      FAQs:[],
      ask:'',
      id:"dskjflkdf"
  }
  componentDidMount()  {
    axios.get('http://localhost:5000/api/FAQs')
    .then(res => this.setState({ FAQs: res.data.data }))
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
        <div className="FAQU">
          <div className="container">
            <h1>FAQs</h1>      
            <FAQUs  FAQs={this.state.FAQs} delfaq={this.delfaq} updatefaq={this.updatefaq} />
             
            <h2>Another Question</h2>
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

export default FAQU;
	
