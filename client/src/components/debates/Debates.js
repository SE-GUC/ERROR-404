import React, { Component } from 'react';
import DebateCard from './debatecard.js'
import axios  from 'axios'
import './Debates.css';



class Debates extends Component {
    constructor() {
        super();
        this.state = {
            debates : []
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/api/debates')
        .then(res => this.setState({debates:res.data.data }))
    }
    render (){
        return(
            <div className ="center-div">
            <h1>Our Debates</h1>
                {this.state.debates.map(debate =><DebateCard key= {this._id} title={debate.title} date = {debate.date} category = {debate.category} description = {debate.description} info = {debate.info}/> 
   )}
          </div>  
        )
    }
}

export default Debates