import React ,{Component} from 'react'

class Article extends Component{
    render(){
        var s = "";
        
        for(var i = 0 ; i<this.props.article.comments.length ; i++){
          s +=  this.props.article.comments[i].username
          s += " : "
          s += this.props.article.comments[i].comment
          s += "\n" 
        
        }
        return(
            <div>
                <h3>{this.props.article.title}</h3>
                <p>{this.props.article.description}  {" on "} {this.props.article.date} </p>
                <a href ="#"> {" By "} {this.props.article.author} </a>
                <p>  {"comments :"}  {s}  </p>
            </div>
        )
    }
}
export default Article 