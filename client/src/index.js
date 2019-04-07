import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Debates from "./components/debates/Debates";
import Notfound from "./components/notfound/NotFound";
import CreateDebate from "./components/debates/CreateDebate";
import Chatbars from "./components/chatBar/Chatbars";
import Clubs from "./Clubs";
import Users from "./Users";
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
        <Route exact path="/Users" component={Users} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
