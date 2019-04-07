import React, { Component } from 'react'
import UpdateClub from './UpdateClub'

export class UpdatingClubs extends Component {
  render() {
    return this.props.allClubs.map((club) =>(
      <div>
        <UpdateClub club = {club} updateClub = {this.props.updateClub}/>
      </div>
    ));
  }
}

export default UpdatingClubs
