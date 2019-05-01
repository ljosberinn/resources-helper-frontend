import { createBrowserHistory } from 'history';
import { Container } from 'rbx';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router';
import StoreContext from 'storeon/react/context';
import './App.css';
import { Loading } from './components/Loading';
import { PageFooter } from './components/PageFooter';
import { PageHeader } from './components/PageHeader';
import './i18n';
import './index.scss';
import DonatePage from './pages/DonatePage';
import ToSPage from './pages/ToSPage';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import MinesPage from './pages/Mines';
import SettingsPage from './pages/SettingsPage';
import { store } from './store';

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <PageHeader />
    <Container as="main">
      <StoreContext.Provider value={store}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={LandingPage} exact={true} />
            <Route path="/mines" component={MinesPage} exact={true} />
            <Route path="/settings" component={SettingsPage} exact={true} />
            <Route path="/donate" component={DonatePage} exact={true} />
            <Route path="/tos" component={ToSPage} exact={true} />
            <Route path="/contact" component={ContactPage} exact={true} />
            <Route component={() => <h1>404 - not found</h1>} />
          </Switch>
        </Suspense>
      </StoreContext.Provider>
    </Container>
    <PageFooter />
  </Router>,
  document.getElementById('root'),
);
