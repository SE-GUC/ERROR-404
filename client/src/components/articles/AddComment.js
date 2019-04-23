import React, { Component } from 'react';


export class AddComment extends Component {

  state = {
      comment: ''
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
        {/* <button onClick={this.props.updateComment.bind(this, {comment:this.state.comment, article: this.props.article})}>
        COMMENT
        </button> */}
        </div>
    )
  }
}

export default AddComment