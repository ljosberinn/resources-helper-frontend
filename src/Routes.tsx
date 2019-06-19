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
    delay: 0,
  });

export interface IRoutes {
  title: string;
  path: string;
  parentMenu: string;
  component:
    | (React.ComponentClass<{}, any> & Loadable.LoadableComponent)
    | (React.FunctionComponent<{}> & Loadable.LoadableComponent);
  requiresAuth: boolean;
}

export const AccountRoutes: IRoutes[] = [
  {
    title: 'API',
    path: '/api',
    parentMenu: 'general',
    component: LoadingFactory(import('./features/API')),
    requiresAuth: true,
  },
  {
    title: 'Profile',
    path: '/profile',
    parentMenu: 'general',
    component: LoadingFactory(import('./features/Profile')),
    requiresAuth: true,
  },
];

export const AuthenticationRoute = LoadingFactory(
  import('./features/Authentication/'),
);

export const MetaRoutes: IRoutes[] = [];

export const GameRoutes: IRoutes[] = [];
