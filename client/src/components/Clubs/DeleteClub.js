import React, { Component } from 'react'
import Club from './Club'

export class DeleteClub extends Component {

  
    
  render() {
    return this.props.allClubs.map((club) => (
        <div>
        <Club key={club._id} club={club} />
        <button onClick={this.props.delClub.bind(this, club._id)}>DELETE</button>
        </div>
    ));
  }
}

export default DeleteClub
