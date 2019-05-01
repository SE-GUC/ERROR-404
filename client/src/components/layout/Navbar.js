import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <header className="toolbar">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">HUB</a>     
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">FAQs</a>     
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/createuser">Sign Up</a>     
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Login</Link>     
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </header>
    ) 
  }
}

export default Navbar
