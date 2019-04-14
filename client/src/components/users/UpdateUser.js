import React, { Component } from "react";
import axios from "axios";

export class UpdateUser extends Component {
  render() {
    return (
      <div className="center-div">
        <ul>
          <h1>Users Information</h1>

          {this.state.users.map(user => (
            <Users
              key={user._id}
              type={user.type}
              firstName={user.firstName}
              lastName={user.lastName}
              birthDate={user.birthDate}
              bio={user.bio}
              email={user.email}
              password={user.password}
              house={user.house}
              din={user.din}
              dor={user.dor}
              clubs={user.clubs}
            />
          ))}
        </ul>
      </div>
    );
  }
}
