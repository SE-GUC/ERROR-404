import React ,{Component} from 'react'
import AddComment from './AddComment';
import { Link } from 'react-router-dom'
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
                <h1>{this.props.article.title}</h1>
                <p>{this.props.article.description}  {" on "} {this.props.article.date} </p>
                <Link to ="/getUsers"> {" By "} {this.props.article.author} </Link>
                {/* <p>  {"comments :"} {s}</p> */}
                <div>
                {/* <AddComment article = {this.props.article} /> */}
                {/* updateComment = {this.props.updateComment} */}
                </div>
            </div>
        )
    }
}
export default Article 