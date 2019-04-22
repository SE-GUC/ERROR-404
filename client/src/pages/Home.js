import React, { Component } from "react";
import "../layout/Footer/footer.css";
import "./Home.css";
import Toolbar from "../layout/Toolbar/Toolbar";
import Complexbutton from "../layout/Buttons/Complexbutton";
import CustomizedTable from "../layout/Table/CustomizedTable";
import { tsImportType } from "@babel/types";

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
