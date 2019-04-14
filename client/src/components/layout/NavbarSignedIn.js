import React, { Component } from 'react'

export class NavbarSignedIn extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/faq">FAQs</a>     
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/Profile">Profile</a>     
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">Logout</a>     
              </li>
            </ul>
          </div>
        </div>
      </nav>
    ) 
  }
}

export default NavbarSignedIn