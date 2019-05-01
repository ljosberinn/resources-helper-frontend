import { Navbar } from 'rbx';
import React from 'react';
import createStore from 'storeon';
import useStoreon from 'storeon/react';
import { IRoutes } from '../ResourcesHelper';
import { IUserState } from '../types/user';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface NavigationStoreon {
  dispatch: createStore.Dispatch;
  user: IUserState;
}

interface NavigationProps {
  routes: IRoutes[];
}

export const Navigation = ({ routes }: NavigationProps) => {
  const { user }: NavigationStoreon = useStoreon('user');
  const { t } = useTranslation();

  return (
    <Navbar color="primary">
      <Navbar.Burger />
      <Navbar.Menu>
        <Navbar.Segment align="start">
          {routes
            .filter(route => {
              if (!route.requiresAuth || (route.requiresAuth && user.isAuthenticated)) {
                return route;
              }

              return null;
            })
            .map(({ component, title, path }, index) => (
              <Navbar.Item as={Link} to={path} onMouseOver={() => component.preload()} key={index}>
                {t(title)}
              </Navbar.Item>
            ))}
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
};
