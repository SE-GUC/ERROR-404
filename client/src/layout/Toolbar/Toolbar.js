import React from "react";
import "./Toolbar.css";
import Search from "../Search/Search";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div />
      <div className="toolbar__logo">
        <a href="/Home">TIQ TIQ</a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Profile</a>
          </li>

          <li>
            <a href="/">Disciples</a>
          </li>

          <li>
            <a href="/">Blog</a>
          </li>

          <li>
            <a href="/chatbars">Debate Live</a>
          </li>

          <li>
            <a href="/debates">Debates</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          {/* <li>
            <a href="/">Search</a>
          </li> */}

          <li>
            <a href="/">HUB</a>
          </li>
          <li>
            <a href="/">LOG OUT</a>
          </li>

          <form>
            <Search />
          </form>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
