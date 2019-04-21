import React, { Component } from "react";
import '../layout/Footer/footer.css'
import './Home.css'
import Toolbar from "../layout/Toolbar/Toolbar";
import Complexbutton from "../layout/Buttons/Complexbutton";
import CustomizedTable from "../layout/Table/CustomizedTable";
import { tsImportType } from "@babel/types";

export class Home extends Component {
  
  render() {
    return (
      <div >
        <Toolbar />

        <main className="Home__Page" style={{ marginTop: "64px" }}>
          <header>Ready For The Challange !!</header>
        </main>
        <Complexbutton />
        <div className="footer-distributed"/>
          
        {/* <CustomizedTable /> */}
      </div>
    );
  }
}

export default Home;
