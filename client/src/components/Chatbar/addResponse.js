import React, { Component } from 'react';
import axios from 'axios';
import './Chatbars.css';
import Header from './Header';
import Toolbar from '../../layout/Toolbar/Toolbar'
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
    const id = this.props.match.params.key
    fetch('/api/Chatbars/'+id)
    .then(res => res.json())
    .then(chatbars => this.setState({chatbars: chatbars}, () => console.log('chatbars fetched...', chatbars)));
     fetch('/api/Chatbars/getAllForResponses/'+id)
      .then(res => res.json())
      .then(forResponses_ => this.setState({forResponses_: forResponses_}, () => console.log('chatbars fetched...', forResponses_)));
      fetch('/api/Chatbars/getAllAgainstResponses/'+id)
      .then(res => res.json())
      .then(againstResponses_ => this.setState({againstResponses_: againstResponses_}, () => console.log('chatbars fetched...', againstResponses_)));
    
    }
  getStyle = () => {
    return {
     // background: '#f4f4f4',
      padding: '10px',
      textAlign: 'bottom'
    }
  }
  styleBottom= () =>{
    return {

        position: "absolute",
        width: "50%",
        bottom: "10px",
      } 
     }
     styleBottomRight= () =>{
      return {
  
          position: "absolute",
          width: "50%",
          bottom: "10px",
          left:"850px"
        } 
       }
  
  addForResponse(chatbar){
    const updatedData = {}
    if(chatbar.forResponses !== "")
      updatedData.forResponses = chatbar.forResponses
     
      axios.put(' http://localhost:5000/api/Chatbars/for/'+this.props.match.params.key,
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
       
        axios.put(' http://localhost:5000/api/Chatbars/against/'+this.props.match.params.key,
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
        <Toolbar/>
        <br></br>
        <h1 style={{fontSize:'50px', color: '#E2A325',textAlign: 'center', padding: '10px',postion:'fixed',left: '0',width:' 100%'}}>
          {this.state.chatbars.debateLiveTitle}
        </h1>

      </div> 
      {/* <div class="tm-timeline-description-wrap">
                                <div class="tm-bg-dark tm-timeline-description">
                                    <h3 class="tm-text-green tm-font-400">Nulla venenatis purus nec quam</h3>
                                    <p>You may tell your co-workers about TemplateMo free stuffs to download and use for any website project. Thank you for supporting us.</p>
                                    <p class="tm-text-green float-right mb-0">New Event . 12 July 2018</p>
                                </div>
                            </div> */}
      
     <form onSubmit={this.onSubmit}>
     <div style = {{fontSize:'20px' , color:"white", top:'80px'}}>
    <h1 > THE FOR RESPONSES </h1>
    
     {this.state.forResponses_.map (forResponse =>
    

      <p style = {{textAlign:'center',position:"relative",right:'480px'}}>{forResponse}</p>
   
     )}
     <div style={this.styleBottom()} >


                 <input
                 type="text"
                 name="forResponses" 
                 style={{flex: '10' , padding: '5px',position: "absoulte", width: "50%",bottom: "2px",color:"black"}}
                 placeholder='Write your response here if you are with...'
                 value={this.state.forResponses}
                 onChange={this.onChange}
                 />
                 <b>    </b>
                 <input 
                  type="Submit" 
                  value="Add my opinion"
                  className="btn"
                  onClick= {this.addForResponse.bind(this, {_id:this.props.match.params.key,forResponses:this.state.forResponses})}
                  style={{flex: '1'}}
                  />
         
     </div>
     <form onSubmit={this.onSubmit}></form>
     <div style = {{fontSize:'20px' , color:"white" ,position:"absolute",right:'10px', top:'160px'}}>
    <h1 > THE AGAINST RESPONSES </h1>
     {this.state.againstResponses_.map (againstResponse =>
     <center>

     <p>{againstResponse}</p> </center>

     )}
     </div>
     <div style={this.styleBottomRight()}>
          <input
                 type="text"
                 name="againstResponses" 
                 style={{flex: '10' , padding: '5px',position: "absoulte", width: "50%",bottom: "2px",color:"black"}}
                 placeholder='Write your response here if you are against...'
                 value={this.state.againstResponses}
                 onChange={this.onChange}
                 />
                 <b>    </b>
                 <input 
                  type="Submit" 
                  value="Add my opinion"
                  className="btn"
                  onClick= {this.addAgainstResponse.bind(this, {_id:this.props.match.params.key,againstResponses:this.state.againstResponses})}
                  style={{flex: '1'}}
                  />
        
         </div>
     </div>
     </form>
     </div>
    )
    
       
    
  }
}


export default addResponse
