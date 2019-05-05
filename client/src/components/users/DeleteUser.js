import React, { Component } from "react";
import OurPeople from "../../pages/Homee/ourPeople/OurPeople";

import "../../pages/Homee/ourPeople/ourPeople.css";

export class DeleteUser extends Component {
  render() {
    console.log(this.props.users);

    return (
      <div className="thumbnails1">
        {this.props.users.map(user => (
          <div>
            <div class="inner1">
              <OurPeople
                key={user._id}
                id={user._id}
                user={user}
                deleteUser={this.props.deleteUser}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DeleteUser;
