import React, { Component } from "react";
import AllContent from "./components/Contents/AllContent";
import axios from "axios";
import AddContent from "./components/Contents/AddContent";
import DeleteContent from "./components/Contents/DeleteContent";
import UpdatingContents from "./components/Contents/UpdatingContents";
import Toolbar from "./layout/Toolbar/Toolbar";
import "./App.css";
import {connect} from "react-redux";

const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id }
}
class Contents extends Component {
  state = {
    allContent: []
  };

  componentDidMount() {
    axios
      .get("/api/Contents")
      .then(res => this.setState({ allContent: res.data.data }));
  }

  addContent = content => {
    axios
      .post("/api/Contents", content)
      .then(res =>
        this.setState({ allContent: [...this.state.allContent, res.data.data] })
      );
  };
  delContent = id => {
    axios.delete(`/api/Contents/${id}`).then(
      this.setState({
        allContent: [
          ...this.state.allContent.filter(content => content._id !== id)
        ]
      })
    );
  };
  updateContent = content => {
    console.log(content);
    const contents = this.state.allContent;
    var i;
    for (i = 0; i < contents.length; i++) {
      if (contents[i]._id === content._id) {
        if (content.name !== "") contents[i].name = content.name;
        if (content.description !== "")
          contents[i].description = content.description;
      }
    }
    const updatedData = {};
    if (content.name !== "") updatedData.name = content.name;
    if (content.description !== "")
      updatedData.description = content.description;
    axios
      .put(`/api/Contents/${content._id}`, updatedData)
      .then(this.setState({ allContent: contents }));
  };
  render() {
    const auth = this.props.usertype === "TIQadmin";
    if (auth) {
    return (
      <div className="App">
      <Toolbar />
        <h1>ADD NEW CONTENT</h1>
        <AddContent addContent={this.addContent} />
        <h1>DELETE CONTENT</h1>
        <DeleteContent
          allContent={this.state.allContent}
          delContent={this.delContent}
        />
        <h1>UPDATE CONTENT</h1>
        <UpdatingContents
          allContent={this.state.allContent}
          updateContent={this.updateContent}
        />
      </div>
    );
  }else{
    return (
      <div className="App">
         <Toolbar />
        {/* <h1>ALL CONTENT</h1> */}
        <AllContent allContent={this.state.allContent} />
      </div>
    );
  }
}
}
const Form = connect(
  mapStateToProps,
  null
)(Contents)
export default Form

