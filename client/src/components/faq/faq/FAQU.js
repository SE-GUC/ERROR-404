import React, { Component } from 'react';
import axios from 'axios';
import FAQUs from './FAQUs';
import NavbarSignedIn from "../../layout/NavbarSignedIn";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Navbar from "../../layout/Navbar";
import { Link } from 'react-router-dom'
const mapStateToProps = state => {
  return { token: state.token, usertype: state.usertype, id: state.id };
};

class FAQU extends Component {
  state={
      FAQs:[],
      ask:'',
      id:this.props.id
     
  }
  
  handleClick = event => {
    let path = `/userquestions`;
    this.props.history.push(path);
   
  };
  
  componentDidMount()  {
    axios.get('/api/FAQs')
    .then(res => this.setState({ FAQs: res.data.data }))
  }
  ask = (ask,id) => {
    console.log("pp")
    axios.post('/api/Questions/ask',
    { "question":ask,
      "user":id
    })
    alert("Added successfully!")
  
  }
  renderRedirect = () => {
    let path = `/faqAdmin`;
    this.props.history.push(path);
   
  }

onChange= (e) => this.setState({[e.target.name]: e.target.value});

onSubmit = (e) => {
  console.log("kk")
  e.preventDefault();
  this.ask(this.state.ask,this.state.id);
  this.setState({ ask: '' 
  
  });
}

  render() {
    if (this.props.token == null) {
      return (
        <div>
        <Navbar/>
        <div className="FAQU">
        <div className="container">

                <h1 style={{paddingRight:'500px',boxAlign:"inline",color:"#3e3939bf"}} >FAQs </h1>
                <FAQUs  FAQs={this.state.FAQs}  />
                <br></br>
                <button
                  variant="contained"
                  onClick={<Link to="/signin" />}
                  className="btn"
                    style={{backgroundColor:"#70c7be"}}
                >
                  Sign In
                </button>
                </div>
          </div>
        </div>
      );
    }
else{
  if (this.props.usertype === "HUBadmin") {
    return(
        <div>
        {this.renderRedirect()}
       </div>
    );
  }
    else{
   return (
      

        <div className="FAQU">
              <NavbarSignedIn />

          <div className="container">
            <view>
            <h1 style={{paddingRight:'500px',boxAlign:"inline",color:"#3e3939bf"}} >FAQs  <Button variant="contained"  style={edit} onClick={this.handleClick}>
            My Questions     
            </Button></h1>  
           
            </view>
           
            <FAQUs  FAQs={this.state.FAQs}  />
           <br></br>
        <h2 style={{color:"#3e3939bf"}}> Another Question</h2>
            <form onSubmit={this.onSubmit} >
            <label>
                    <input
                       type="text"
                        name='ask'
                        value={this.state.ask}
                        placeholder="Add Question ..."

                        style={{width:'500px',fontSize:'15px',fontFamily:'Arial',backgroundColor:'#efefef'}}

                        onChange={this.onChange}/>
                </label>

          
            <input 
          type="submit" 
          value="Submit" 
          style={{backgroundColor:"#5ec0b6"}}
          className="btn"
          />
        </form>
          </div>  
        </div>
   
    );
   }}
  }
}
const edit={
  backgroundColor:'#5ec0b6' ,
  '&:hover': {backgroundColor: 'red'},
  paddingBottom:'5px',
  marginLeft:"976px",
}
const Form = connect(
  mapStateToProps,
  null
)((FAQU));
export default Form;
	
