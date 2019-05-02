import React, { Component } from 'react'
import './App.css';
import color from '@material-ui/core/colors/red';
import Toolbar from './layout/Toolbar/Toolbar';
//import "./ContactUs.css";
export class ContactUs extends Component {
  render() {
    return (

<div class="container">
<Toolbar/>
  <div class="row header">
    <h1>CONTACT US &nbsp;</h1>
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
            <label for="Messenger :">Messenger : <span class="req"></span></label>
            <a style={{ color:"BLACK"}}>m.me/TheIntelligentQuestion</a>
          </p>
        </li>        
        <li>
          <p>
            <label for="Mail :">Mail : <span class="req"></span></label>
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