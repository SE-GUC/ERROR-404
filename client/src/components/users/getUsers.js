import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users &&
            this.props.users.map(user => <User key={user._id} user={user} />)}
        </ul>
      </div>
    );
  }
}

export default Users;
