import React from "react";
import "./Toolbar.css";
import Search from "../Search/Search";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

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
        <a href="/TIQHome">TIQ TIQ</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/Profile">Profile</a>
          </li>

          <li>
            <a href="/">Disciples</a>
          </li>

          <li>
            <a href="/Articles">Blog</a>
          </li>

          <li>
            <a href="/chatbars">Debate Live</a>
          </li>

          <li>
            <a href="/debates">Debates</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/ourPeople">Debaters</a>
          </li>

          <li>
            <a href="/">HUB</a>
          </li>
          <li>
            <a href="/signout">LOG OUT</a>
          </li>

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

export default toolbar;
