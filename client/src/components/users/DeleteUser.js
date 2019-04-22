import React, { Component } from "react";
import OurPeopleAdmin from "../../pages/Homee/ourPeople/OurPeopleAdmin";

// import ourPeopleUser from "../../pages/Homee/ourPeople/ourPeopleUser";

import DetailedExpansionPanel from "./DetailedExpansionPanel";

export class DeleteUser extends Component {
  render() {
    console.log(this.props.users);
    return this.props.users.map(user => (
      <div>
        <OurPeopleAdmin
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
