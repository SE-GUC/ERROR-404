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
          placeholder={this.props.club.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="description"
          placeholder={this.props.club.description}
          onChange={this.onChange}
        />
        <button onClick={this.props.updateClub.bind(this, {_id: this.props.club._id, name:this.state.name, description: this.state.description})}>
        UPDATE
        </button>
        </div>
    )
  }
}

export default UpdateClub
