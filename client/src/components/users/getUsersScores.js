import React, { Component } from "react";
import './modal.css';
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
      .get("/api/Users/AllScores")
      .then(res => this.setState({ users: res.data.data }));
  }

  componentDidMount() {
    axios
      .get("/api/Users/AllScores")
      .then(res => this.setState({ users: res.data.data }));
  }
  // updateScore = () => {
  //   axios.post(' http://localhost:5000/api/Users/updateScores/:id/:score', {
  //       score:this.state.score
        
  //   })
  //     .then(res => this.setState({ score: [...this.state.score, res.data] }));
      
  // }

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
