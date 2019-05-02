import React, { Component } from 'react'
import Article from './Article' 

class DeleteArticle extends Component {

   render(){
    return (
        <div class="thumbnails">
        {this.props.allArticles.map((article)=>(
                <div class="box">
                <div class="inner">
                    <h3>{article.title}</h3>
                  <input 
                   type="Submit" 
                   value="delete"
                   className="btn"
                   onClick={this.props.deleteArticle.bind(this, article._id)}
                   style={{flex: '10'}}
                    />
                  </div>
                </div>))}
            
            </div>
        )
    
   }

}
export default DeleteArticle 