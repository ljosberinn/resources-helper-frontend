import { createBrowserHistory } from 'history';
import { Container, Footer, Hero, Title } from 'rbx';
import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router';
import StoreContext from 'storeon/react/context';
import { Loading } from './components/Loading';
import { PageSubTitle } from './components/PageSubTitle';
import LandingPage from './pages/LandingPage';
import { store } from './store';
import Loadable, { LoadingComponentProps } from 'react-loadable';
import { FooterLinks } from './components/FooterLinks';
import { Navigation } from './components/Navigation';

const LoadInterceptor = (props: LoadingComponentProps) => {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  }

  if (props.timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    );
  }

  if (props.pastDelay) {
    return <Loading />;
  }

  return null;
};

const LoadingFactory = (component: Promise<React.ComponentType | { default: React.ComponentType }>) =>
  Loadable({
    loader: () => component,
    loading: LoadInterceptor,
    timeout: 10000,
    delay: 300,
  });

const FooterRoutes: IRoutes[] = [
  { path: '/donate', component: LoadingFactory(import('./pages/DonatePage')), requiresAuth: false, title: 'donateLink' },
  { path: '/contact', component: LoadingFactory(import('./pages/ContactPage')), requiresAuth: false, title: 'contactLink' },
  { path: '/tos', component: LoadingFactory(import('./pages/ToSPage')), requiresAuth: false, title: 'tosLink' },
];

const NavRoutes: IRoutes[] = [
  { path: '/mines', component: LoadingFactory(import('./pages/MinesPage')), requiresAuth: false, title: 'minesLink' },
  { path: '/settings', component: LoadingFactory(import('./pages/SettingsPage')), requiresAuth: true, title: 'settingsLink' },
  { path: '/demo', component: LoadingFactory(import('./pages/DemoPage')), requiresAuth: false, title: 'demoLink' },
];

const AllRoutes = [...FooterRoutes, ...NavRoutes];

export interface IRoutes {
  title: string;
  path: string;
  component: (React.ComponentClass<{}, any> & Loadable.LoadableComponent) | (React.FunctionComponent<{}> & Loadable.LoadableComponent);
  requiresAuth: boolean;
}

const ResourcesHelper = () => (
  <StoreContext.Provider value={store}>
    <Router history={createBrowserHistory()}>
      <Hero>
        <Hero.Body as="header">
          <Container>
            <Title className="is-size-1 is-size-3-mobile">Resources Helper</Title>
            <Suspense fallback={null}>
              <PageSubTitle />
            </Suspense>
          </Container>
        </Hero.Body>
      </Hero>
      <main>
        <Suspense fallback={null}>
          <Navigation routes={NavRoutes} />
          <Switch>
            <Route path="/" component={LandingPage} exact={true} />

            {AllRoutes.map(({ path, component }, index) => (
              <Route path={path} component={component} exact={true} key={index} />
            ))}

            <Route component={() => <h1>404 - not found</h1>} />
          </Switch>
        </Suspense>
      </main>
      <Footer className="has-text-centered">
        <Suspense fallback={null}>
          <FooterLinks routes={FooterRoutes} />
        </Suspense>
      </Footer>
    </Router>
  </StoreContext.Provider>
);

export default ResourcesHelper;
ResourcesHelper.whyDidYouRender = true;
