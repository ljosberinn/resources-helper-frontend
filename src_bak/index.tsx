import { createBrowserHistory } from 'history';
import 'rbx/index.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import StoreContext from 'storeon/react/context';
import './App.css';
import './i18n';
import LandingPage from './pages/LandingPage';
import MinesPage from './pages/Mines';
import SettingsPage from './pages/SettingsPage';
import { store } from './store';
import { Loading } from './components/Loading';

const history = createBrowserHistory();

ReactDOM.render(
  <Suspense fallback={<Loading />}>
    <StoreContext.Provider value={store}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/mines" component={MinesPage} exact={true} />
          <Route path="/settings" component={SettingsPage} exact={true} />
          <Route component={() => <h1>404 - not found</h1>} />
        </Switch>
      </Router>
    </StoreContext.Provider>
  </Suspense>,
  document.getElementById('root'),
);
