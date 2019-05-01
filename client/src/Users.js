import React, { Component } from "react";

import "./App.css";

import Register from "././components/users/Register";
import All from "./components/users/getUsers";

import Axios from "axios";

class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    Axios.get("/api/Users").then(res =>
      this.setState({ users: res.data.data })
    );
  }

  createNewUser(
    type,
    firstName,
    lastName,
    birthDate,
    bio,
    email,
    password,
    house,
    din,
    dor,
    clubs
  ) {
    console.log(type);
    console.log(firstName);
    console.log(lastName);
    console.log(birthDate);
    console.log(bio);
    console.log(email);
    console.log(password);
    console.log(house);
    console.log(din);
    console.log(dor);
    console.log(clubs);
    Axios.post("/api/Users/register", {
      type,
      firstName,
      lastName,
      birthDate,
      bio,
      email,
      password,
      house,
      din,
      dor,
      clubs
    }).then(res =>
      this.setState({ users: [...this.state.users, res.data.data] })
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Add New Use</h1>
        <Register createNewUser={this.createNewUser} />

        <h2>Info Of All Users</h2>
        <All users={this.state.users} />
      </div>
    );
  }
}

export default Users;
