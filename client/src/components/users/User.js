import React, { Component } from "react";

import deleteUser from "./DeleteUser";
export class User extends Component {
  render() {
    return (
      <div>
        <ul>
          <p>
            {"Type : "} {this.props.user.type}
          </p>
          <p>
            {"firstName : "}
            {this.props.user.firstName}
          </p>
          <p>
            {"lastName : "}
            {this.props.user.lastName}{" "}
          </p>
          <p>
            {"BirthDate : "}
            {this.props.user.birthDate}{" "}
          </p>
          <p>
            {"Bio : "}
            {this.props.user.bio}{" "}
          </p>
          <p>
            {"Email :"}
            {this.props.user.email}
          </p>
          <p>
            {"Password :"}
            {this.props.user.password}{" "}
          </p>
          <p>
            {"House :"}
            {this.props.user.house}
          </p>
          <p>
            {"Din :"}
            {this.props.user.din}{" "}
          </p>
          <p>
            {"Dor :"}
            {this.props.user.dor}{" "}
          </p>
          <p>
            {"Clubs :"}
            {this.props.user.clubs}{" "}
          </p>
        </ul>
      </div>
    );
  }
}

export default User;