import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AllArticles from './components/articles/AllArticles'
import AddArticle from './components/articles/AddArticle'
import DeleteArticle from './components/articles/DeleteArticle'
import UpdateArticlehelper from './components/articles/UpdateArticlehelper';

class Articles extends Component {
  state = {
    allArticles : [] 
  }
  componentDidMount(){
    axios.get('/api/Articles')
    .then(res=>this.setState({allArticles:res.data.data}))
  }

  addArticle = (article)=>{
      //console.log(article)
      axios.post('http://localhost:5000/api/Articles/create' , article)
      .then(res=>this.setState({allArticles:[...this.state.allArticles,res.data.data]}))
      .catch(error=> {
        console.log('erorr')
      });
  }
  // addComment = (comment , id , userid)=>{
  //   const articles = this.state.allArticles 
  //   for(var i = 0 ; i<articles.length;i++){
  //     if(articles[i]._id === id ){
  //       if(comment!== ""){
  //         articles[i].comments[comments.length-1].comment = comment 
  //         articles[i].comments[comments.length-1].username = Users.findOne({_id:id})
  //       }
  //     }
  //     }
  //     axios.put(`http://localhost:5000/api/Articles/comment/${id}/${userid}`,comment)
  //     .then(this.setState({allArticles:articles}))
  //   }
  
  deleteArticle = (id) =>{
    axios.delete(`http://localhost:5000/api/Articles/${id}`)
    .then(res=>this.setState({allArticles:[...this.state.allArticles.filter(article=>article._id!== id)]}))
  }

  updateArticle = article => {
    const articles =this.state.allArticles
    for(var i = 0 ; i<articles.length;i++){
      if(articles[i]._id === article._id){
        if(article.title !== ""){
          articles[i].title = article.title 
        }
        if(article.description !== ""){
          articles[i].description = article.description 
        }
      }
    }
    const back = {}
    if(article.title !== ""){
      back.title = article.title
    }
    if(article.description !== ""){
      back.description = article.description
    }
    axios.put(`http://localhost:5000/api/Articles/${article._id}`,back)
    .then(this.setState({allArticles : articles})) 
  }

  render() {
    return (
      <div className="App">
      <h1>show all Articles</h1>
      <AllArticles allArticles = {this.state.allArticles}/>
      {/* <h1>add new comment</h1>
      <AddComment allArticles = {this.state.allArticles} addComment = {this.state.addComment}/> */}
      <h1>add new Article</h1>
      <AddArticle addArticle = {this.addArticle} />
      <h1>delete article</h1>
      <DeleteArticle deleteArticle ={this.deleteArticle} allArticles={this.state.allArticles}/>
      <h1>update articles</h1>
      <UpdateArticlehelper allArticles ={this.state.allArticles} updateArticle = {this.updateArticle} />
      </div>
    );
  }
}

export default Articles;