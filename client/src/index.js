import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Debates from "./components/debates/Debates";
import Notfound from "./components/notfound/NotFound";
import CreateDebate from "./components/debates/CreateDebate";
import SignIn from "./components/signin/SignIn";
import FAQ from "./components/faq/faq/FAQ";
import FAQU from "./components/faq/faq/FAQU";
import Question from "./components/faq/question/Question";
import QuestionAdmin from "./components/faq/question/QuestionAdmin";
import SignedInUser from "./hubHomepage/signedInUser";
import SignedInAdmin from "./hubHomepage/signedInAdmin";
import AdminEdits from "./AdminEdits";
import SearchDebateDate from "./components/debates/searchdate";
import SearchDebateCategory from "./components/debates/searchcategory";
import deleteChatBar from "./components/Chatbar/DeleteChatBar";
import addResponse from "./components/Chatbar/addResponse";

// import Chatbars from "./components/chatBar/Chatbars";
import Clubs from "./Clubs";

import Contents from "./Contents";
import Articles from "./Articles";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ContactUs from "./ContactUs";
import "typeface-roboto";
import { Provider } from "react-redux";
import store from "./store";

import { CreateUser } from "./components/users/CreateUser";

//Nada//---------------------------
import ourPeopleAdmin from "./pages/Homee/ourPeople/OurPeopleAdmin";
import ourPeopleUser from "./pages/Homee/ourPeople/ourPeopleUser";
import Home from "./pages/Home";
import Score from "./pages/Score";
import Homee from "./pages/Homee/Home";
import AllEvents from "./pages/Homee/AllEvents";
import Toolbar from "./layout/Toolbar/Toolbar";
import getUsers from "./components/users/getUsers";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <Toolbar />
        </div>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Homee" component={Homee} />
          <Route exact path="/ourPeopleUser" component={ourPeopleUser} />
          <Route exact path="/ourPeopleAdmin" component={ourPeopleAdmin} />

          <Route exact path="/AllEvents" component={AllEvents} />
          <Route exact path="/Score" component={Score} />
          <Route exact path="/createuser" component={CreateUser} />
          <Route exact path="/getUsers" component={getUsers} />

          <Route exact path="/debates" component={Debates} />

          <Route
            exact
            path="/debates/searchbydate/:date"
            component={SearchDebateDate}
          />
          <Route
            exact
            path="/debates/searchbycategory/:category"
            component={SearchDebateCategory}
          />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/createDebate" component={CreateDebate} />
          <Route exact path="/Clubs" component={Clubs} />
          {/* <Route exact path="/chatbars" component={Chatbars} /> */}
          <Route exact path="/Articles" component={Articles} />
          <Route exact path="/faq" component={FAQU} />
          <Route exact path="/faqAdmin" component={FAQ} />
          <Route exact path="/userquestions" component={Question} />
          <Route exact path="/adminquestions" component={QuestionAdmin} />
          <Route exact path="/Contents" component={Contents} />
          <Route exact path="/addResponse" component={addResponse} />
          <Route exact path="/deleteChatBar" component={deleteChatBar} />

          <Route exact path="/user" component={SignedInUser} />
          <Route exact path="/admin" component={SignedInAdmin} />
          <Route exact path="/adminedits" component={AdminEdits} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
