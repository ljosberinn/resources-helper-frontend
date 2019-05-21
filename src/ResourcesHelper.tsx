import { createBrowserHistory } from 'history';
import { Container, Hero, Column, Title } from 'rbx';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router';
import StoreContext from 'storeon/react/context';
import { PageSubTitle } from './components/PageSubTitle';
import LandingPage from './pages/LandingPage';
import { store } from './store';
import { Navigation } from './components/Navigation';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FooterRoutes, NavRoutes } from './Routes';

const AllRoutes = [...FooterRoutes, ...NavRoutes];

const ResourcesHelper = () => (
  <StoreContext.Provider value={store}>
    <Router history={createBrowserHistory()}>
      <Hero>
        <Hero.Body as="header">
          <Container>
            <Title className="is-size-1 is-size-3-mobile">
              Resources Helper
            </Title>
            <Suspense fallback={null}>
              <PageSubTitle />
            </Suspense>
          </Container>
        </Hero.Body>
      </Hero>
      <Column.Group as="main">
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Column size={2}>
              <Navigation />
            </Column>
            <Column>
              <Switch>
                <Route path="/" component={LandingPage} exact={true} />

                {AllRoutes.map(({ path, component }, index) => (
                  <Route
                    path={path}
                    component={component}
                    exact={true}
                    key={index}
                  />
                ))}

                <Route component={() => <h1>404 - not found</h1>} />
              </Switch>
            </Column>
          </Suspense>
        </ErrorBoundary>
      </Column.Group>
    </Router>
  </StoreContext.Provider>
);

export default ResourcesHelper;
ResourcesHelper.whyDidYouRender = true;
