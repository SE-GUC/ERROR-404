import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class AdminEdits extends Component {
  render() {
    return (
      <div>
        <Link className="navbar-brand" to="http://localhost:3000/Clubs">EDIT CLUBS</Link>
        <Link className="navbar-brand" to="http://localhost:3000/debates">EDIT DEBATES</Link>
        <Link className="navbar-brand" to="http://localhost:3000/chatbars">EDIT CHATBARS</Link>
        <Link className="navbar-brand" to="http://localhost:3000/faqAdmin">EDIT FAQS</Link>
        <Link className="navbar-brand" to="http://localhost:3000/Contents">EDIT CONTENT</Link>
        <Link className="navbar-brand" to="http://localhost:3000/articles">EDIT ARTICLES</Link>
      </div>
    )
  }
}

export default AdminEdits
