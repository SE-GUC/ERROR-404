import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Debates from "./components/debates/Debates";
import Notfound from "./components/notfound/NotFound";
import CreateDebate from "./components/debates/CreateDebate";

import FAQ from './components/faq/FAQ';
import AllUsers from './components/users/AllUsers';
import UserProfile from './components/users/UserProfile';
import About from './components/about/About';
import Chatbars from "./components/chatBar/Chatbars";
import Clubs from "./Clubs";
import Users from "./Users";
import Contents from "./Contents";
import Articles from "./Articles";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "typeface-roboto";

const routing = (
  <Router>
    <div>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/debates" component={Debates} />
        <Route exact path="/createDebate" component={CreateDebate} />
        <Route exact path="/Clubs" component={Clubs} />
        <Route exact path="/chatbars" component={Chatbars} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path ="/about" component={About}/>
        <Route exact path="/finduser" component={AllUsers} />
        <Route exact path = "/users/:id" component = {UserProfile}/>
        <Route exact path="/Contents" component={Contents} />
        <Route exact path="/Users" component={Users} />
       
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
