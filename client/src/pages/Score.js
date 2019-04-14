import React, { Component } from "react";

import Toolbar from "../layout/Toolbar/Toolbar";
import axios from "axios";
import CustomizedTable from "../layout/Table/CustomizedTable";

export class Score extends Component {
  constructor() {
    super();
    this.state = {
      scores: []
    };
  }

  componentDidMount() {
    console.log("ana henaa");
    axios
      .get("http://localhost:5000/api/Users")
      .then(res => this.setState({ scores: res.data.data }));
  }

  render() {
    console.log("kiki");
    console.log(this.state.scores);
    return (
      <div>
        <Toolbar />

        <main className="Score__page" style={{ marginTop: "64px" }}>
          <header>Debaters Scores!!</header>
        </main>

        <CustomizedTable scores={this.state.scores} />
      </div>
    );
  }
}

export default Score;
