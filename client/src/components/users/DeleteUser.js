import React, { Component } from "react";
import OurPeople from "../../pages/Homee/ourPeople/OurPeople";

import DetailedExpansionPanel from "./DetailedExpansionPanel";

export class DeleteUser extends Component {
  render() {
    console.log(this.props.users);

    return this.props.users.map(user => (
      <div>
        <OurPeople
          key={user._id}
          id={user._id}
          user={user}
          deleteUser={this.props.deleteUser}
        />

        {/* <DetailedExpansionPanel
          key={user._id}
          id={user._id}
          user={user}
          deleteUser={this.props.deleteUser}
        /> */}
      </div>
    ));
  }
}

export default DeleteUser;
