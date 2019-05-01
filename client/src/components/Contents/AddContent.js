import React, { Component } from 'react'

export class AddContent extends Component {
  state = {
    date: '',
    type: "",
    description: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
      e.preventDefault();
      this.props.addContent({date: this.state.date, description: this.state.description, type: this.state.type});
      this.setState({ date: '', description: '', type: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="date"
            placeholder="Add Content date ..."
            value={this.state.date}
            onChange={this.onChange}
          />
          <br></br>
          <input
            type="text"
            name="description"
            placeholder="Add  Content ..."
            value={this.state.description}
            onChange={this.onChange}
          />
          <br></br>
           <input
            type="text"
            name="type"
            placeholder="Add  Content type ..."
            value={this.state.type}
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

export default AddContent
