import React, { Component } from "react";

import Toolbar from "../layout/Toolbar/Toolbar";
import Complexbutton from "../layout/Buttons/Complexbutton";
import CustomizedTable from "../layout/Table/CustomizedTable";

export class Home extends Component {
  render() {
    return (
      <div>
        <Toolbar />

        <main className="Home__Page" style={{ marginTop: "64px" }}>
          <header>Ready For The Challange !!</header>
        </main>
        <Complexbutton />
        {/* <CustomizedTable /> */}
      </div>
    );
  }
}

export default Home;
