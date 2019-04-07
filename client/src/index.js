import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Debates from './components/debates/Debates';
import Notfound from './components/notfound/NotFound';
import CreateDebate from './components/debates/CreateDebate'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router  , Switch} from 'react-router-dom'
import 'typeface-roboto'

const routing = (
    <Router>
      <div>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/debates" component={Debates} />
          <Route exact path="/createDebate" component={CreateDebate} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();