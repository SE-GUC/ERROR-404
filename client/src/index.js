import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Chatbars from './components/chatBar/Chatbars'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router  , Switch} from 'react-router-dom'
import 'typeface-roboto'

const routing = (
    <Router>
      <div>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/chatbars" component={Chatbars} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();