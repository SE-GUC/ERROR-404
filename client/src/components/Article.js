import React ,{Component} from 'react'

class Article extends Component{
    render(){
        return(
            <div>
                <p>{this.props.article.title} {":"} {this.props.article.description} {" By "} {this.props.article.author} {" on "} {this.props.article.date} {" "} {this.props.article.comments} </p>
            </div>
        )
    }
}
export default Article 