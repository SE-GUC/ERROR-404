import React, { Component } from 'react'
import Club from './Club'

export class DeleteClub extends Component {

  
    
  render() {
    return (
    <div class="thumbnails">
    {this.props.allClubs.map((club) => (
            <div class="box">
            <div class="inner">
                <h3>{club.name}</h3>
              <input 
               type="Submit" 
               value="delete"
               className="btn"
               onClick= {this.props.delClub.bind(this, club._id)}
               style={{flex: '10'}}
                />
              </div>
            </div>))}
        
        </div>
    )
    // this.props.allClubs.map((club) => (
    //     <div>
    //     b key<Clu={club._id} club={club} />
    //     <button onClick={this.props.delClub.bind(this, club._id)}>DELETE</button>
    //     </div>
    // ));
  }
}

export default DeleteClub
