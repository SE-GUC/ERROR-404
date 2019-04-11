import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Debates from "./components/debates/Debates";
import Notfound from "./components/notfound/NotFound";
import CreateDebate from "./components/debates/CreateDebate";

<<<<<<< HEAD
import FAQ from './components/faq/faq/FAQ';
import FAQU from './components/faq/faq/FAQU';
import Question from './components/faq/question/Question'
import QuestionAdmin from './components/faq/question/QuestionAdmin'
=======
import FAQ from './components/faq/FAQ';
>>>>>>> 16b7bef90dd69c51e399855306181196d6ef11cc

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
<<<<<<< HEAD
        <Route exact path="/faq" component={FAQU} />
        <Route exact path="/faqAdmin" component={FAQ} />
        <Route exact path="/userquestions" component={Question} />
        <Route exact path="/adminquestions" component={QuestionAdmin} />
=======
        <Route exact path="/faq" component={FAQ} />

>>>>>>> 16b7bef90dd69c51e399855306181196d6ef11cc

        <Route exact path="/Contents" component={Contents} />
        <Route exact path="/Users" component={Users} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

serviceWorker.unregister();
