import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Debates from "./components/debates/Debates";
import Notfound from "./components/notfound/NotFound";
import CreateDebate from "./components/debates/CreateDebate";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Score from "./pages/Score";

import FAQ from "./components/faq/FAQ";

import Chatbars from "./components/chatBar/Chatbars";
import Clubs from "./Clubs";
import Users from "./Users";
import Contents from "./Contents";
import Articles from "./Articles";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "typeface-roboto";
import { CreateUser } from "./components/userss/CreateUser";
import GetUsers from "./components/userss/GetUsers";

const routing = (
  <Router>
    <div>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Home" component={Home} />

        <Route exact path="/Score" component={Score} />

        <Route exact path="/debates" component={Debates} />
        <Route exact path="/createDebate" component={CreateDebate} />
        <Route exact path="/Clubs" component={Clubs} />
        <Route exact path="/chatbars" component={Chatbars} />
        <Route exact path="/Articles" component={Articles} />
        <Route exact path="/faq" component={FAQ} />

        <Route exact path="/Contents" component={Contents} />
        <Route exact path="/createuser" component={CreateUser} />
        <Route exact path="/getusers" component={GetUsers} />

        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
