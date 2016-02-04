import React from 'react';
import { render } from 'react-dom'
import {Router, Route, Link, browserHistory} from 'react-router'
import App from './App';
import Dashboard from './Dashboard';
render((
    <Router history={browserHistory}>
      <Route path={"/"} component={App} >
      </Route>
      <Route path={"/dashboard"} component={Dashboard} />
    </Router>), document.getElementById('root')
);
