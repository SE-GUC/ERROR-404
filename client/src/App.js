import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AllArticles from './components/AllArticles'
import AddArticle from './components/AddArticle'

class App extends Component {
  state = {
    allArticles : [] 
  }
  componentDidMount(){
    axios.get('/api/Articles')
    .then(res=>this.setState({allArticles:res.data.data}))
  }

  addArticle = (article)=>{
      console.log(article)
      axios.post('http://localhost:5000/api/Articles/create' , article)
      .then(res=>this.setState({allArticles:[...this.state.allArticles,res.data.data]}))
      .catch(error=> {
        console.log('erorr')
      });
  }
  render() {
    return (
      <div className="App">
      <h1>show all Articles</h1>
      <AllArticles allArticles = {this.state.allArticles}/>
      <h1>add new article</h1>
      <AddArticle addArticle = {this.addArticle} />
      </div>
    );
  }
}

export default App;
