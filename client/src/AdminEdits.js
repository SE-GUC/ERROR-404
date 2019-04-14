import React, { Component } from 'react'

export class AdminEdits extends Component {
  render() {
    return (
      <div>
        <a className="navbar-brand" href="http://localhost:3000/Users">EDIT USERS</a>
        <a className="navbar-brand" href="http://localhost:3000/Clubs">EDIT CLUBS</a>
        <a className="navbar-brand" href="http://localhost:3000/debates">EDIT DEBATES</a>
        <a className="navbar-brand" href="http://localhost:3000/chatbars">EDIT CHATBARS</a>
        <a className="navbar-brand" href="http://localhost:3000/faqAdmin">EDIT FAQS</a>
        <a className="navbar-brand" href="http://localhost:3000/Contents">EDIT CONTENT</a>
        <a className="navbar-brand" href="http://localhost:3000/articles">EDIT ARTICLES</a>
      </div>
    )
  }
}

export default AdminEdits
