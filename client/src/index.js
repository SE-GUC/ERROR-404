import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Debates from "./components/debates/Debates";
import SearchDebateDate from "./components/debates/searchdate";
import SearchDebateCategory from "./components/debates/searchcategory";
import Notfound from "./components/notfound/NotFound";
import SignIn from "./components/signin/SignIn";
import FAQ from "./components/faq/faq/FAQ";
import FAQU from "./components/faq/faq/FAQU";
import Question from "./components/faq/question/Question";
import QuestionAdmin from "./components/faq/question/QuestionAdmin";

import Chatbars from "./components/chatBar/Chatbars";
import Clubs from "./Clubs";
import Users from "./Users";
import Contents from "./Contents";
import Articles from "./Articles";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "typeface-roboto";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/debates" component={Debates} />
          <Route exact path="/debates/searchbydate/:date" component={SearchDebateDate} />
          <Route exact path="/debates/searchbycategory/:category" component={SearchDebateCategory} />
          <Route exact path="/Clubs" component={Clubs} />
          <Route exact path="/chatbars" component={Chatbars} />
          <Route exact path="/Articles" component={Articles} />
          <Route exact path="/faq" component={FAQU} />
          <Route exact path="/faqAdmin" component={FAQ} />
          <Route exact path="/userquestions" component={Question} />
          <Route exact path="/adminquestions" component={QuestionAdmin} />
          <Route exact path="/Contents" component={Contents} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
