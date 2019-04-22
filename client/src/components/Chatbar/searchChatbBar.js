import React, { Component } from "react";
import axios from "axios";
import "./Chatbars.css";
import ToolBar from "../../layout/Toolbar/Toolbar";
import Header from './Header';
import Logo from '../images/debate2.jpg';
import Background from '../../Images/background.jpeg';


class SearchDebateLive extends Component {
  componentDidMount() {
    const { title } = this.props.match.params;
    axios
      .get(`http://localhost:5000/api/chatbars/Search/${title}`)
      .then(res => this.setState({ chatbars: res.data.data }));
  }
  constructor(props) {
    super(props);
    this.state = {
      chatbars: []
    };
  }
  getStyle = () => {
    return {
      backgroundImage:Background,
      padding: '10px',
      textAlign: 'center'
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <>
       <div style={this.getStyle()} >
      <div>
        <ToolBar />
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
        </div>
      </>
    );
  }
}

export default SearchDebateLive;
