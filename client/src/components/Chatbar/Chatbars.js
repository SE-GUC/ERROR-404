import React, { Component } from "react";
import "./Chatbars.css";
import Header from "./Header";
import Toolbar from "../../layout/Toolbar/Toolbar";
import Background from "../../Images/background.jpeg";
import Logo from "../images/debate2.jpg";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
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
  handleClick =() => {
     this.props.history.push("/signin");
  };
  handleClickME =() => {
    this.props.history.push("/deleteChatBar");
 };
 handleClickSearch =() => {
  this.props.history.push(`chatbars/search/${
    this.state.searchkey
  }`)
};
 
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
                  //onClick={() => (document.location = "/signin")}
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
                  <Link to={"/addResponse/" + chatbar._id} class="image fit">
                    <img src={Logo} alt="" />
                  </Link>
                  <div class="inner">
                    <h3>{chatbar.date}</h3>
                    <p>{chatbar.debateLiveTitle} </p>
                    <Link to={"/addResponse/" + chatbar._id} class="btn">
                      Debate it Now!
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="btn"
            style={{ position: "absolute", left: "20px", top: "63px" }}
            onClick={() => {
              this.handleClickME();
            }}
          >
            CREATE AND DELETE
          </button>
          <div style={{ right: "0", top: "63px" }}>
            <button
              className="btn"
              style={{ position: "absolute", right: "0", top: "63px" }}
              onClick={() => {
                this.handleClickSearch();
              }}
              // onClick={() =>
              //   (document.location.href = `chatbars/search/${
              //     this.state.searchkey
              //   }`)
              // }
            >
              Search
            </button>
            <input
              type="text"
              name="searchkey"
              style={{
                flex: "10",
                padding: "5px",
                position: "absolute",
                 width: "26%",
                right: "170px",
                top: "60px",
                color: "black"
              }}
              placeholder="Search Debate Live"
              value={this.state.searchkey}
              onChange={this.onChange}
            />

          </div>
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
                  <Link to={"/addResponse/" + chatbar._id} class="image fit">
                    <img src={Logo} alt="" />
                  </Link>
                  <div class="inner">
                    <h3>{chatbar.date}</h3>
                    <p>{chatbar.debateLiveTitle} </p>
                    <Link to={"/addResponse/" + chatbar._id} class="btn">
                      Debate it Now!
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ right: "0", top: "63px" }}>
            <button
              className="btn"
              style={{ position: "absolute", right: "0", top: "63px" }}
              onClick={() => {
                this.handleClickSearch();
              }}
              // onClick={() =>
              //   (document.location.href = `chatbars/search/${
              //     this.state.searchkey
              //   }`)
              // }
            >
              Search
            </button>
            <input
              type="text"
              name="searchkey"
              style={{
                flex: "10",
                padding: "5px",
                position: "absolute",
                 width: "26%",
                right: "170px",
                top: "60px",
                color: "black"
              }}
              placeholder="Search Debate Live"
              value={this.state.searchkey}
              onChange={this.onChange}
            />

          </div>
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