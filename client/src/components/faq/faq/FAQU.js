import React, { Component } from 'react';
import axios from 'axios';
import FAQUs from './FAQUs';
import NavbarSignedIn from "../../layout/NavbarSignedIn";

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
              <NavbarSignedIn />

          <div className="container">

            <h1>FAQs</h1>      
            <FAQUs  FAQs={this.state.FAQs}  />
            <h2>Another Question</h2>
            <form onSubmit={this.onSubmit} >
            <label>
                    <input
                    
                       type="text"
                        name='ask'
                        value={this.state.ask}
                        style={{display:'inline-block',height:'40px',width:'800px' ,fontSize:'20px',fontFamily:'Arial' , padding: "8px 12px" }}
                        onChange={this.onChange}/>
                </label>

            {/* <button    onClick={this.ask(this.state.ask)} >Send</button> */}
          
            <input 
          type="submit" 
          value="Submit" 
          
          style={{ height:'40px' ,display:'inline-block', padding: "8px 12px",borderRadius:'0px' }}
          className="btn"/>
        </form>
        

          </div>  
        </div>
   
    );
  }
}

export default FAQU;
	
