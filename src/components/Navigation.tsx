import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Button } from 'rbx';
import { IRoutes } from '../Routes';
import { GitHubTag } from './GitHubTag';
import { AuthenticationRoute } from '../Routes';
import createStore from 'storeon';

interface LoginLogoutProps {
  isAuthenticated: boolean;
  dispatch: createStore.Dispatch;
}

const LoginLogout = ({ dispatch, isAuthenticated }: LoginLogoutProps) => (
  <NavLink
    to="/auth"
    onClick={() => isAuthenticated && dispatch('user/logout')}
    onMouseOver={AuthenticationRoute.preload}
    onFocus={AuthenticationRoute.preload}
    className="is-link"
  >
    <Button textAlign="centered" outlined fullwidth>
      {isAuthenticated ? 'Logout' : 'Login | Register'}
    </Button>
  </NavLink>
);

interface NavigationProps {
  routes: IRoutes[];
  isAuthenticated: boolean;
  dispatch: createStore.Dispatch;
}

export const Navigation = ({
  routes,
  isAuthenticated,
  dispatch,
}: NavigationProps) => (
  <Menu className="section">
    <Menu.List>
      <Menu.List.Item
        as={LoginLogout}
        dispatch={dispatch}
        isAuthenticated={isAuthenticated}
      />
    </Menu.List>
    {(isAuthenticated ? ['general', 'game', 'meta'] : ['general', 'meta'])
      .map(title => ({
        title,
        routes: routes.filter(({ parentMenu }) => parentMenu === title),
      }))
      .map(({ title, routes }) => (
        <React.Fragment key={title}>
          <Menu.Label>{title}</Menu.Label>
          <Menu.List>
            {routes.map(({ component, title, path }) => (
              <Menu.List.Item
                as={NavLink}
                activeClassName="is-active"
                to={path}
                onMouseOver={component.preload}
                onFocus={component.preload}
                key={title}
              >
                {title}
              </Menu.List.Item>
            ))}
          </Menu.List>
        </React.Fragment>
      ))}
    <a
      rel="noreferrer noopener"
      href="https://github.com/ljosberinn/resources-helper"
      target="_blank"
      className="github-corner"
      aria-label="githubLink"
    >
      <GitHubTag />
    </a>
  </Menu>
);
