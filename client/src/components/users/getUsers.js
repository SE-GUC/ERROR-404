import React, { Component } from "react";

import axios from "axios";
import DeleteUser from "./DeleteUser";
import DetailedExpansionPanel from "./DetailedExpansionPanel";
import FormDialog from "./FormDialog";

class GetUsers extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/Users").then(res => {
      this.setState({ users: res.data.data });
    });
  }
  deleteUser = id => {
    console.log(id);

    axios.delete("http://localhost:5000/api/Users/" + id).then(
      this.setState({
        users: [...this.state.users.filter(user => user._id !== id)]
      })
    );
  };
  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }
  handleUpdateClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleSubmit = async () => {
    console.log(this.props.user._id);
    const update = axios.put(
      "http://localhost:5000/api/Users/update/" + this.props.user._id,
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        bio: this.state.bio,
        birthDate: this.setState.birthDate,
        clubs: this.state.clubs
      }
    );

    if (Object.keys(update.data)[0] === "err")
      this.setState({ Error: "Invalid/Missing Information" });
    else window.location.reload();
    /*
     * axios ... put whatver using this.state.firstName, this.staet.lastName
     */
  };

  render() {
    return (
      <div className="center-div">
        <ul>
          <h1>Users Information</h1>

          {this.state.users && (
            <DeleteUser users={this.state.users} deleteUser={this.deleteUser} />
          )}
        </ul>
      </div>
    );
  }
}
export default GetUsers;
