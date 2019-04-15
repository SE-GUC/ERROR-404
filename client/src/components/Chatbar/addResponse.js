import React, { Component } from 'react';
import axios from 'axios';
import './Chatbars.css';
import Header from './Header';
export class addResponse extends Component {
        constructor() {
          super();
          this.state = {
            chatbars: [],
            forResponses_:[],
            againstResponses_:[],
            forResponses:'',
            againstResponses:''
          };
          
        }
        onChange= (e) => this.setState({[e.target.name]: e.target.value});
        onSubmit= (e) => {
          e.preventDefault();
            // this.setState(this.state.debateLiveTitle);
          
             this.setState({forResponses:''})
             this.setState({againstResponses:''})
      }
  componentDidMount() {
    fetch('/api/Chatbars/5cb01f8fcf950617108d6892')
    .then(res => res.json())
    .then(chatbars => this.setState({chatbars: chatbars}, () => console.log('chatbars fetched...', chatbars)));
     fetch('/api/Chatbars/getAllForResponses/5cb01f8fcf950617108d6892')
      .then(res => res.json())
      .then(forResponses_ => this.setState({forResponses_: forResponses_}, () => console.log('chatbars fetched...', forResponses_)));
      fetch('/api/Chatbars/getAllAgainstResponses/5cb01f8fcf950617108d6892')
      .then(res => res.json())
      .then(againstResponses_ => this.setState({againstResponses_: againstResponses_}, () => console.log('chatbars fetched...', againstResponses_)));
    
    }
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      textAlign: 'bottom'
    }
  }
  addForResponse(chatbar){
    const updatedData = {}
    if(chatbar.forResponses !== "")
      updatedData.forResponses = chatbar.forResponses
     
      axios.put(' http://localhost:5000/api/Chatbars/for/5cb01f8fcf950617108d6892',
       {
         forResponses:[chatbar.forResponses]
       }
       )
       

    //  .then(res => this.setState({ chatbars: [...this.state.chatbars, res.data] },console.log(forResponses_)));
     
        
    }
    addAgainstResponse(chatbar){
      const updatedData = {}
      if(chatbar.againstResponses !== "")
        updatedData.againstResponses = chatbar.againstResponses
       
        axios.put(' http://localhost:5000/api/Chatbars/against/5cb01f8fcf950617108d6892',
         {
           againstResponses:[chatbar.againstResponses]
         }
         )
        
  
      //  .then(res => this.setState({ chatbars: [...this.state.chatbars, res.data] },console.log(forResponses_)));
          
      }
    
  
  render() {
    return (
      <div style={this.getStyle()}  >
        <div>
        <Header />
      </div> 

      
     <form onSubmit={this.onSubmit}>
     <div style = {{fontSize:'20px' , color:"black", top:'80px'}}>
    <h1 > THE FOR RESPONSES </h1>
     {this.state.forResponses_.map (forResponse =>
     <p>{forResponse}</p>

     )}
     
                 <input
                 type="text"
                 name="forResponses" 
                 style={{flex: '10' , padding: '5px',width:'280px'}}
                 placeholder='Write your response here if you are with...'
                 value={this.state.forResponses}
                 onChange={this.onChange}
                 />
                 
                 <input 
                  type="Submit" 
                  value="Add my opinion"
                  className="btn"
                  onClick= {this.addForResponse.bind(this, {_id:'5cb01f8fcf950617108d6892',forResponses:this.state.forResponses})}
                  style={{flex: '1'}}
                  />
         
     </div>
     <form onSubmit={this.onSubmit}></form>
     <div style = {{fontSize:'20px' , color:"black" ,position:"absolute",right:'10px', top:'85px'}}>
    <h1 > THE AGAINST RESPONSES </h1>
     {this.state.againstResponses_.map (againstResponse =>
     <p>{againstResponse}</p>

     )}
          <input
                 type="text"
                 name="againstResponses" 
                 style={{flex: '10' , padding: '5px',width:'280px'}}
                 placeholder='Write your response here if you are against...'
                 value={this.state.againstResponses}
                 onChange={this.onChange}
                 />
                 
                 <input 
                  type="Submit" 
                  value="Add my opinion"
                  className="btn"
                  onClick= {this.addAgainstResponse.bind(this, {_id:'5cb01f8fcf950617108d6892',againstResponses:this.state.againstResponses})}
                  style={{flex: '1'}}
                  />
         
       
     </div>
     </form>
     </div>
    )
    
       
    
  }
}


export default addResponse
