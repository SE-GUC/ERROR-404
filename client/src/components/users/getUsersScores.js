import React, { Component } from "react";

import axios from "axios";
import CustomrizedTable from "../../Table/CustomrizedTable";

class GetUsersScores extends Component {
  constructor() {
    super();
    this.state = {
      type: "",
      firstName: "",
      lastName: "",
      score: ""
    };
  }
  getAllUsers() {
    axios
      .get("http://localhost:5000/api/Users/AllScores")
      .then(res => this.setState({ users: res.data.data }));
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/Users/AllScores")
      .then(res => this.setState({ users: res.data.data }));
  }

  render() {
    return (
      <div className="center-div">
        <ul>
          <CustomrizedTable
            p={this.CustomrizedTable}
            componentDidMount={this.componentDidMount}
            getAllUsers={this.getAllUsers}
            users={users}
          />
        </ul>
      </div>
    );
  }
}
export default GetUsersScores;
