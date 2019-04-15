import React, { Component } from 'react'
import Article from './Article' 

class DeleteArticle extends Component {

   render(){
       return  this.props.allArticles.map((article)=>(
        <div>
        <Article key={article._id} article={article} />
        <button onClick={this.props.deleteArticle.bind(this, article._id)}>DELETE Article</button>
        </div>  
       ));
   }

}
export default DeleteArticle 