import React, { Component } from 'react'
import UpdateContent from './UpdateContent'

export class UpdatingContents extends Component {
  render() {
   return(
      <div class="thumbnails">
      
     { this.props.allContent.map((content) =>(
        <div class="box">
        <div class="inner">
        <UpdateContent content = {content} updateContent = {this.props.updateContent}/>
       </div>
       </div>
     ))};
     
       </div>
     )
  }
}

export default UpdatingContents
