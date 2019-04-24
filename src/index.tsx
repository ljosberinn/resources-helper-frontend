import { createBrowserHistory } from 'history';
import 'rbx/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import StoreContext from 'storeon/react/context';
import { Dashboard } from './Dashboard';
import { store } from './store';

const history = createBrowserHistory();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
      </Switch>
    </Router>
  </StoreContext.Provider>,
  document.getElementById('root'),
);
