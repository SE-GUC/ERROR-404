import React ,{Component} from 'react'

class Article extends Component{
    render(){
        var s = "";
        
        for(var i = 0 ; i<this.props.article.comments.length ; i++){
          s +=  this.props.article.comments[i].username
          s += ":"
          s += this.props.article.comments[i].comment
        }
        return(
            <div>
                <p>{this.props.article.title} {":"} {this.props.article.description} {" By "} {this.props.article.author} {" on "} {this.props.article.date} {"comm "} {s} </p>
            </div>
        )
    }
}
export default Article 