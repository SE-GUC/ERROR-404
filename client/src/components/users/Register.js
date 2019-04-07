import React, { Component } from "react";

export class Register extends Component {
  state = {
    type: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    bio: "",
    email: "",
    password: "",
    house: "",
    din: "",
    dor: "",
    clubs: ""
  };

  handelChange = event => {
    if (event.target.name === "clubs") {
      this.setState({ clubs: [event.target.value] });
    } else this.setState({ [event.target.name]: event.target.value });
  };

  handelSubmit = (event, createNewUser) => {
    event.preventDefault();

    createNewUser(
      this.state.type,
      this.state.firstName,
      this.state.lastName,
      this.state.birthDate,
      this.state.bio,
      this.state.email,
      this.state.password,
      this.state.house,
      this.state.din,
      this.state.dor,
      this.state.clubs
    );

    this.setState({
      type: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      bio: "",
      email: "",
      password: "",
      house: "",
      din: "",
      dor: "",
      clubs: ""
    });
  };

  render() {
    return (
      <form
        onSubmit={event => this.handelSubmit(event, this.props.createNewUser)}
      >
        <label>
          Type :
          <input
            type="text"
            name="type"
            values={this.state.type}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          First Name :
          <input
            type="text"
            name="firstName"
            values={this.state.firstName}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          Last Name :
          <input
            type="text"
            name="lastName"
            values={this.state.lastName}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          Birth Date :
          <input
            type="text"
            name="birthDate"
            values={this.state.birthDate}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          Bio :
          <input
            type="text"
            name="bio"
            values={this.state.bio}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          Email :
          <input
            type="text"
            name="email"
            values={this.state.email}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          password :
          <input
            type="password"
            name="password"
            values={this.state.password}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          house :
          <input
            type="text"
            name="house"
            values={this.state.house}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          Date of Joining the club :
          <input
            type="date"
            name="din"
            values={this.state.din}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          Date of leaving the club :
          <input
            type="date"
            name="dor"
            values={this.state.dor}
            onChange={this.handelChange}
          />
        </label>

        <p />

        <label>
          Current Clubs You In :
          <input
            type="text"
            name="clubs"
            values={this.state.clubs}
            onChange={this.handelChange}
          />
        </label>

        <p />
        <input type="submit" value="ADD" />
      </form>
    );
  }
}

export default Register;
