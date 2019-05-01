import React, { Component } from 'react'
import UpdateArticle from './UpdateArticle'

export class UpdateArticlehelper extends Component {
  render() {
    return(
      <div class="thumbnails">
      
     { this.props.allArticles.map((article) =>(
        <div class="box">
        <div class="inner">
        <UpdateArticle article = {article} updateArticle = {this.props.updateArticle}/>
       </div>
       </div>
     ))};
     </div>
     )
     }
}

export default UpdateArticlehelper
