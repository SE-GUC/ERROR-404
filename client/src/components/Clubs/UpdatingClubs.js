import React, { Component } from 'react'
import UpdateClub from './UpdateClub'

export class UpdatingClubs extends Component {
  render() {
    return(
     <div class="thumbnails">
     
    { this.props.allClubs.map((club) =>(
       <div class="box">
       <div class="inner">
        <UpdateClub club = {club} updateClub = {this.props.updateClub}/>
      </div>
      </div>
    ))};
    
      </div>
    )
}
}

export default UpdatingClubs
