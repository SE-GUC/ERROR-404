import React, { Component } from "react";

import Toolbar from "../layout/Toolbar/Toolbar";
import Complexbutton from "../layout/Buttons/Complexbutton";

import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div>
        <Toolbar />
        <main className="Home_Page_title">
          <p>READY FOR THE CHALLENGE...!!</p>
        </main>
        <Complexbutton />
        <div />
      </div>
    );
  }
}

export default Home;
