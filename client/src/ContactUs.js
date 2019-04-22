import React, { Component } from 'react'
import './App.css';
import color from '@material-ui/core/colors/red';
import Toolbar from './layout/Toolbar/Toolbar';
import "./ContactUs.css";
export class ContactUs extends Component {
  render() {
    return (
  //     <div>
  //       <Toolbar/>
  //     <header><center>
  //  <h1 style={{ fontSize:"50px"}}>CONTACT US</h1>
  //  </center>
  //  </header>        
  //  <br>
  //  </br>
  //  <br>
  //  </br><br>
  //  </br>
  //  <h1 style={{ fontSize:"30px",color:"white"}}><center>
  //  <h1 style={{ fontSize:"30px"}}><h1 style={{ color:"black"}}>Facebook Page:</h1><a style={{ color:"blue"}} href="https://www.facebook.com/TheIntelligentQuestion/"><u>https://www.facebook.com/TheIntelligentQuestion/ </u> </a> </h1> 
  //  <h1 style={{ fontSize:"30px"}}><h1 style={{ color:"black"}}>Blog:</h1><a style={{ color:"blue"}} href="https://tiqguc.blogspot.com.eg/p/welcome.html"><u> https://tiqguc.blogspot.com.eg/p/welcome.html</u></a> </h1>    
  //  <h1 style={{ fontSize:"30px"}}><h1 style={{ color:"black"}}>Messenger:</h1> m.me/TheIntelligentQuestion</h1>
  //  <h1 style={{ fontSize:"30px"}}><h1 style={{ color:"black"}}>Mail:</h1> the.intelligent.question@gmail.com</h1>  
   

  //  </center>
  //  </h1>
  //     </div>
  
<div class="container">
<Toolbar/>
  <div class="row header">
    <h1>CONTACT US &nbsp;</h1>
    <h3>Fill out the form below to learn more!</h3>
  </div>
  <div class="row body">
    <form action="#">
      <ul>
        
        <li>
          <p class="left">
          <label for="Facebook Page :">Facebook Page :</label>
          <a style={{ color:"blue"}}  href="https://www.facebook.com/TheIntelligentQuestion/"><u>https://www.facebook.com/TheIntelligentQuestion/ </u> </a> 
          </p>
          <p class="left">
            <label for="Blog :">Blog :</label>
            <a style={{ color:"blue"}} href="https://tiqguc.blogspot.com.eg/p/welcome.html"><u> https://tiqguc.blogspot.com.eg/p/welcome.html</u></a>    
          </p>
        </li>
        
        <li>
          <p>
            <label for="Messenger :">Messenger : <span class="req">*</span></label>
            <a style={{ color:"BLACK"}}>m.me/TheIntelligentQuestion</a>
          </p>
        </li>        
        <li>
          <p>
            <label for="Mail :">Mail : <span class="req">*</span></label>
            <a style={{ color:"BLACK"}}>the.intelligent.question@gmail.com</a>
          </p>
        </li>   
        
      </ul>
    </form>  
  </div>
</div>
    )
  }
}

export default ContactUs
