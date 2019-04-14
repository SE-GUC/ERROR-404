import React, { Component } from "react";
import User from "./User";

export class DeleteUser extends Component {
  render() {
    return this.props.users.map(user => (
      <div>
        <User key={user._id} user={user} />
        <button onClick={this.props.deleteUser.bind(this, user._id)}>
          DELETE User
        </button>
      </div>
    ));
  }
}

export default DeleteUser;
