import React, { Component } from 'react'
import UpdateContent from './UpdateContent'

export class UpdatingContents extends Component {
  render() {
    return this.props.allContent.map((content) =>(
      <div>
        <UpdateContent content = {content} updateContent = {this.props.updateContent}/>
      </div>
    ));
  }
}

export default UpdatingContents
