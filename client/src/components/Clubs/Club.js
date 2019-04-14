import React, { Component } from 'react'

export class Club extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.club.name }</p>
        <p>{ this.props.club.description }</p>
      </div>
    )
  }
}

export default Club
