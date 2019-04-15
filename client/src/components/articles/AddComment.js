import React, { Component } from 'react';

export class AddComment extends Component {

  state = {
      comment: '',
      userid: ''
  } 

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  
    
  render() {
    return (
        <div>
        <input
          type="text"
          name="comment"
          placeholder=""
          onChange={this.onChange}
        />
        <input
          type="text"
          name="userid"
          placeholder=" "
          onChange={this.onChange}
        />
        <button onClick={this.props.updateComment.bind(this, {comment:this.state.comment,_id: this.props.article._id, userid: this.state.userid})}>
        COMMENT
        </button>
        </div>
    )
  }
}

export default AddComment