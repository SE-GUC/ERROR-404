import React, { Component } from 'react';
import axios from 'axios';
import './Chatbars.css';
import Header from './Header';
import Toolbar from '../../layout/Toolbar/Toolbar'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

export class DeleteChatBar extends Component {
        constructor() {
          super();
          this.state = {
            chatbars: [],
            debateLiveTitle: ''
          };
          
        }
  componentDidMount() {
      fetch('/api/Chatbars/')
      .then(res => res.json())
      .then(chatbars => this.setState({chatbars: chatbars.data}, () => console.log('chatbars fetched...', chatbars)));
  }
  onSubmit= (e) => {
    e.preventDefault();
      // this.setState(this.state.debateLiveTitle);
    
       this.setState({debateLiveTitle:''})
       this.render();
}
handleClick =() => {
  this.props.history.push("/chatbars");
};
onChange= (e) => this.setState({[e.target.name]: e.target.value});

  getStyle = () => {
    return {
     // background: '#f4f4f4',
      padding: '10px',
      textAlign: 'bottom'
    }
  }
 
    deleteDebateLive= (id)=> {
        axios.delete(' /api/Chatbars/'+id)
        .then(this.setState({chatbars: [...this.state.chatbars.filter(chatbar => chatbar._id !== id)]}))
    
      } 
      addDebateLive = () => {
        axios.post(' /api/Chatbars/create', {
            debateLiveTitle:this.state.debateLiveTitle
            
        })
          .then(res => this.setState({ chatbars: [...this.state.chatbars, res.data] }));
          alert("The new motion has been added successfully, please refresh the page");
      }
      render() {
        const auth = this.props.usertype === "TIQadmin";
        if (auth) {
        return (
          <div style={this.getStyle()}  >
        <div>
        <Toolbar/>
        <Header />
        <button
            className="btn"
            style={{ position: "absolute", left: "20px", top: "63px" }}
            onClick={() => {
              this.handleClick();
            }}
          >
            BACK
          </button>
      </div>
      <form onSubmit={this.onSubmit} style= {{display: 'flex'}}>
                <input
                 type="text"
                 name="debateLiveTitle" 
                 style={{flex: '10' , padding: '5px',color:"black"}}
                 placeholder="Add a new Debate live..."
                 value={this.state.debateLiveTitle}
                 onChange={this.onChange}
                 />
                 
                <input 
                  type="Submit" 
                  value="Create"
                  className="btn"
                  onClick= {this.addDebateLive}
                  style={{flex: '1'}}
                  />
                  
            </form>
            <br></br>

            <div class="thumbnails">
      {this.state.chatbars.map(chatbar =>
							<div class="box">
							
							
								 <div class="inner">
									<h3>{chatbar.debateLiveTitle}</h3>
									<p> {chatbar.date} </p>
                  <input 
                  type="Submit" 
                 value="delete"
                 className="btn"
                  onClick= {this.deleteDebateLive.bind(this,chatbar._id)}

                   style={{flex: '10'}}
                  />
									{/* <a href={'/addResponse/'+chatbar._id} class="btn">Debate it Now!</a> */}
								</div>
							</div>)}
          
          </div>
       
        </div>
        
        )
      }
    }
}
const Form = connect(
  mapStateToProps,
  null
)(DeleteChatBar);

export default Form;
//export default DeleteChatBar