import React, { Component } from 'react'
import Content from './Content'

export class DeleteContent extends Component {

  
    
  render() {
    return (
      <div class="thumbnails">
      {this.props.allContent.map((content) => (
              <div class="box">
              <div class="inner">
                  <h3>{content.type}</h3>
                  <h3>{content.description}</h3>
                <input 
                 type="Submit" 
                 value="delete"
                 className="btn"
                 onClick= {this.props.delContent.bind(this, content._id)}
                 style={{flex: '10'}}
                  />
                </div>
              </div>))}
          
          </div>
      )
    
  }
}

export default DeleteContent
