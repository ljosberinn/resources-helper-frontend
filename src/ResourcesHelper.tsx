import React from 'react';
import useStoreon from 'storeon/react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Hero, Container, Title, Column, Section } from 'rbx';
import { AccountRoutes, AuthenticationRoute, ProfileRoute } from './Routes';
import { Navigation } from './components/Navigation';

const AllRoutes = [...AccountRoutes];

export const ResourcesHelper = () => {
  const { user, dispatch } = useStoreon('user');
  const { isAuthenticated } = user;

  const currentRoutes = AllRoutes.filter(
    route => !route.requiresAuth || (isAuthenticated && route.requiresAuth),
  );

  return (
    <Router>
      <Hero>
        <Hero.Body as="header">
          <Container>
            <Title className="is-size-1 is-size-3-mobile">
              Resources Helper
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
      <Column.Group as="main">
        <Column size={2}>
          <Navigation
            routes={currentRoutes}
            isAuthenticated={isAuthenticated}
            dispatch={dispatch}
          />
        </Column>
        <Column size={9}>
          <Section>
            <Switch>
              <Route path="/" component={() => <h1>Home</h1>} exact={true} />
              <Route
                path="/auth"
                component={AuthenticationRoute}
                exact={true}
              />
              <Route
                path="/profile/:id"
                component={ProfileRoute}
                exact={true}
              />

              {currentRoutes.map(({ path, component }) => (
                <Route
                  path={path}
                  component={component}
                  exact={true}
                  key={path}
                />
              ))}

              {['/login', '/register', '/signin', '/signup'].map(path => (
                <Route
                  path={path}
                  exact={true}
                  render={() => (
                    <Redirect to={isAuthenticated ? '/profile' : '/auth'} />
                  )}
                  key={path}
                />
              ))}
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </Section>
        </Column>
      </Column.Group>
    </Router>
  );
};
