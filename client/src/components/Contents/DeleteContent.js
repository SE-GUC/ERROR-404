import React, { Component } from 'react'
import Content from './Content'

export class DeleteContent extends Component {

  
    
  render() {
    return this.props.allContent.map((content) => (
        <div>
        <Content key={content._id} content={content} />
        <button onClick={this.props.delContent.bind(this, content._id)}>DELETE</button>
        </div>
    ));
  }
}

export default DeleteContent
