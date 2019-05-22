import React from 'react';
import Loadable, { LoadingComponentProps } from 'react-loadable';
import { Loading } from './components/Loading';

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

const LoadingFactory = (
  component: Promise<React.ComponentType | { default: React.ComponentType }>,
) =>
  Loadable({
    loader: () => component,
    loading: LoadInterceptor,
    timeout: 3000,
    delay: 300,
  });

export interface IRoutes {
  title: string;
  path: string;
  component:
    | (React.ComponentClass<{}, any> & Loadable.LoadableComponent)
    | (React.FunctionComponent<{}> & Loadable.LoadableComponent);
  requiresAuth: boolean;
}

export const AccountRoutes: IRoutes[] = [
  {
    path: '/settings',
    component: LoadingFactory(import('./pages/SettingsPage')),
    requiresAuth: true,
    title: 'settingsLink',
  },
];

export const MetaRoutes: IRoutes[] = [
  {
    path: '/donate',
    component: LoadingFactory(import('./pages/DonatePage')),
    requiresAuth: false,
    title: 'donateLink',
  },
  {
    path: '/contact',
    component: LoadingFactory(import('./pages/ContactPage')),
    requiresAuth: false,
    title: 'contactLink',
  },
  {
    path: '/tos',
    component: LoadingFactory(import('./pages/ToSPage')),
    requiresAuth: false,
    title: 'tosLink',
  },
];

export const GameRoutes: IRoutes[] = [
  {
    path: '/mines',
    component: LoadingFactory(import('./pages/MinesPage')),
    requiresAuth: false,
    title: 'minesLink',
  },
  {
    path: '/demo',
    component: LoadingFactory(import('./pages/DemoPage')),
    requiresAuth: false,
    title: 'demoLink',
  },
];
