import React, { Component } from 'react';

export class UpdateClub extends Component {

  state = {
      name: '',
      description: ''
  } 

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
    
  render() {
    return (
        
         <div>
        <input
          type="text"
          name="name"
          style={{padding:"5px"}}
          placeholder={this.props.club.name}
          onChange={this.onChange}
        />
        <br></br>
        <input
          type="text"
          name="description"
          placeholder={this.props.club.description}
          onChange={this.onChange}
        />
        <br></br>
        <button onClick={this.props.updateClub.bind(this, {_id: this.props.club._id, name:this.state.name, description: this.state.description})}>
        UPDATE
        </button>
        </div>
        
        
    )
  }
}

export default UpdateClub
