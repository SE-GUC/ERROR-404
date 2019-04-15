import React, { Component } from 'react'
import UpdateArticle from './UpdateArticle'

export class UpdateArticlehelper extends Component {
  render() {
    return this.props.allArticles.map((article) =>(
      <div>
        <UpdateArticle article = {article} updateArticle = {this.props.updateArticle}/>
      </div>
    ));
  }
}

export default UpdateArticlehelper
