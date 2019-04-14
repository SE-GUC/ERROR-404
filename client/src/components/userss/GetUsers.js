import React, { Component } from "react";

import axios from "axios";
import DeleteUser from "./DeleteUser";

class GetUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/Users")
      .then(res => this.setState({ users: res.data.data }));
  }
  deleteUser = id => {
    console.log(id);
    axios.delete("http://localhost:5000/api/Users/" + id).then(
      this.setState({
        users: [...this.state.users.filter(user => user._id !== id)]
      })
    );
  };
  render() {
    return (
      <div className="center-div">
        <ul>
          <h1>Users Information</h1>
          <DeleteUser users={this.state.users} deleteUser={this.deleteUser} />

          {/* {this.state.users.map(user => (
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

          ))} */}
        </ul>
      </div>
    );
  }
}
export default GetUsers;
