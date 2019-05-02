import React ,{Component} from 'react';
import Article from './Article' 
import Logo from "../images/debate2.jpg";
class AllArticles extends Component {
    render(){
        return (
            <div >
            {this.props.allArticles.map((article) =>(
                    <div class="box">
                    <div class="inner">
                        <h3> <Article key = {article._id} article = {article} /></h3>
          
           {/* updateComment = {this.props.updateComment} */}
                     
                      </div>
                    </div>))}
                
                </div>
            )
       
    }
} 

export default AllArticles ;