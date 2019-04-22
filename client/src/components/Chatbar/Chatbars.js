import React, { Component } from "react";
import "./Chatbars.css";
import Header from "./Header";
import Toolbar from "../../layout/Toolbar/Toolbar";
import Background from "../../Images/background.jpeg";
import Logo from "../images/debate2.jpg";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};
class Chatbars extends Component {
  constructor() {
    super();
    this.state = {
      chatbars: [],
      searchkey: null
    };
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  componentDidMount() {
    fetch("/api/Chatbars/")
      .then(res => res.json())
      .then(chatbars =>
        this.setState({ chatbars: chatbars.data }, () =>
          console.log("chatbars fetched...", chatbars)
        )
      );
  }
  getStyle = () => {
    return {
      backgroundImage: Background,
      padding: "10px",
      textAlign: "center"
    };
  };

  render() {
    console.log(this.props.usertype);
    if (this.props.token == null) {
      return (
        <div>
          <div class="thumbnails">
            <div class="box">
              <div class="inner">
                <h3>You have to sign in first!</h3>
                <button
                  variant="contained"
                  onClick={() => (document.location.href = "/signin")}
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

    const auth = this.props.usertype === "TIQadmin";
    if (auth) {
      return (
        <div style={this.getStyle()}>
          <div>
            <Toolbar />
            <Header />
          </div>
          <div class="inner">
            <div class="thumbnails">
              {this.state.chatbars.map(chatbar => (
                <div class="box">
                  <a href={"/addResponse/" + chatbar._id} class="image fit">
                    <img src={Logo} alt="" />
                  </a>
                  <div class="inner">
                    <h3>{chatbar.date}</h3>
                    <p>{chatbar.debateLiveTitle} </p>
                    <a href={"/addResponse/" + chatbar._id} class="btn">
                      Debate it Now!
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="btn"
            style={{ position: "absolute", left: "0", bottom: "0" }}
            onClick={() => (document.location.href = "/deleteChatBar")}
          >
            UPDATE AND DELETE
          </button>
          <div style={{ right: "0", bottom: "0" }}>
            <button
              className="btn"
              style={{ position: "absolute", right: "0", bottom: "0" }}
              onClick={() =>
                (document.location.href = `chatbars/search/${
                  this.state.searchkey
                }`)
              }
            >
              Search
            </button>
            <input
              type="text"
              name="searchkey"
              style={{
                flex: "10",
                padding: "5px",
                position: "fixed",
                // width: "50%",
                right: "100px",
                bottom: "0",
                color: "black"
              }}
              placeholder="Search Debate Live"
              value={this.state.searchkey}
              onChange={this.onChange}
            />

          </div>
          {/* <ul style={{color:"white"}}>
        {this.state.chatbars.map(chatbar => 
          <a key={chatbar._id} href={'/addResponse/'+chatbar._id}> {chatbar.debateLiveTitle} {chatbar.date} <br></br> </a>
        )}
        
        </ul>
        <button className="btn" style={ {position:"absolute", left:"0", bottom:"0"}} onClick={() => (document.location.href = "/deleteChatBar")}>
          UPDATE AND DELETE
        </button>  */}
        </div>
      );
    } else {
      return (
        <div style={this.getStyle()}>
          <div>
            <Toolbar />
            <Header />
          </div>
          <div class="inner">
            <div class="thumbnails">
              {this.state.chatbars.map(chatbar => (
                <div class="box">
                  <a href={"/addResponse/" + chatbar._id} class="image fit">
                    <img src={Logo} alt="" />
                  </a>
                  <div class="inner">
                    <h3>{chatbar.date}</h3>
                    <p>{chatbar.debateLiveTitle} </p>
                    <a href={"/addResponse/" + chatbar._id} class="btn">
                      Debate it Now!
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <ul style={{color:"white"}}>
        {this.state.chatbars.map(chatbar => 
          <a key={chatbar._id} href={'/addResponse/'+chatbar._id}> {chatbar.debateLiveTitle} {chatbar.date} <br></br> </a>
        )}
        
        </ul>
        <button className="btn" style={ {position:"absolute", left:"0", bottom:"0"}} onClick={() => (document.location.href = "/deleteChatBar")}>
          UPDATE AND DELETE
        </button>  */}
        </div>
      );
    }
  }
}
const Form = connect(
  mapStateToProps,
  null
)(Chatbars);

export default Form;
