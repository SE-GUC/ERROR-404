import React, { Component } from 'react';
import Club from './Club';

class AllClubs extends Component {
  render() {
    return this.props.allClubs.map((club) => (
        <Club key={club._id} club={club} />
    ));
  }
}

export default AllClubs;
