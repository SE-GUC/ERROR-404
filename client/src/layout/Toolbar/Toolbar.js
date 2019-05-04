import React from "react";
import "./Toolbar.css";
import Search from "../Search/Search";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

const searchStyle = {
  color: "white"
};
const buttonStyle = {
  display: "flex"
};

const handleLogOut = () => {
  console.log("Signed Out Successfully");
};
const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <Link to="/TIQHome">TIQ TIQ</Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <Link to="/Profile">Profile</Link>
          </li>

          {/* <li>
            <Link to="/">Disciples</Link>
          </li> */}

          <li>
            <Link to="/ArticlesHome">Blog</Link>
          </li>

          <li>
            <Link to="/chatbars">Debate Live</Link>
          </li>

          <li>
            <Link to="/debates">Debates</Link>
          </li>
          
          <li>
            <Link to="/getUsers">Debaters</Link>
          </li>
          <li>
            <Link to="/Score">Scores</Link>
          </li>
         
          <li>
            <Link to="/contents">Announcements</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/">HUB</Link>
          </li>
         
         
             {/* <li>
             <Link to="/signout">LOG OUT</Link>
           </li> */}
          

          {/* <form>
            <Search />
          </form> */}

          {/* <div>
            <SearchIcon />
          </div>
          <div className="spacer" />

          <InputBase placeholder="Search…" style={searchStyle} />
          <button style={buttonStyle}>Search</button> */}
        </ul>
      </div>
    </nav>
  </header>
);
const Form = connect(
  mapStateToProps,
  null
)(toolbar);

export default Form;
//export default toolbar;
