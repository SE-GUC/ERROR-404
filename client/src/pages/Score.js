import React, { Component } from "react";

import Toolbar from "../layout/Toolbar/Toolbar";
import axios from "axios";
import CustomizedTable from "../layout/Table/CustomizedTable";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};
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
      .get("/api/Users")
      .then(res => this.setState({ scores: res.data.data }));
  }
  handleClick =() => {
    this.props.history.push("/signin");
 };

  render() {
    console.log("kiki");
    console.log(this.state.scores);
    if (this.props.token != null) {
      return (
        <div>
          <Toolbar />

          <main className="Score__page" style={{ marginTop: "64px" }}>
            <header>Debaters Scores!!</header>
          </main>

          <CustomizedTable scores={this.state.scores} />
        </div>
      );
    } else {
      return (
        <div>
           <Toolbar />
          <div class="thumbnails">
            <div class="box">
              <div class="inner">
                <h3>You have to sign in first!</h3>
                <button
                  variant="contained"
                  onClick={() => {
                    this.handleClick();
                  }}
                  className="btn"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const Form = connect(
  mapStateToProps,
  null
)(Score);
export default Form;
