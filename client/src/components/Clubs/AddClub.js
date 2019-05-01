import React, { Component } from 'react'

export class AddClub extends Component {
  state = {
    name: '',
    description: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
      e.preventDefault();
      this.props.addClub({name: this.state.name, description: this.state.description});
      this.setState({ name: '', description: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Add Club Name ..."
            value={this.state.name}
            onChange={this.onChange}
          />
          <br></br>
          <input
            type="text"
            name="description"
            placeholder="Add Club Description ..."
            value={this.state.description}
            onChange={this.onChange}
          />
           <br></br>
          <input
            type="submit"
            value="Submit"
            className="btn"
          />
      </form>
    )
  }
}

export default AddClub
