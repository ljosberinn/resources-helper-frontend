import { Menu } from 'rbx';
import React from 'react';
import createStore from 'storeon';
import useStoreon from 'storeon/react';
import { IUserState } from '../types/user';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MetaRoutes, AccountRoutes, GameRoutes } from '../Routes';
import { GitHubTag } from './GitHubTag';

interface NavigationStoreon {
  dispatch: createStore.Dispatch;
  user: IUserState;
}

const menus = [
  {
    title: 'Site',
    routes: AccountRoutes,
  },
  {
    title: 'Resources',
    routes: GameRoutes,
  },
  {
    title: 'Meta',
    routes: MetaRoutes,
  },
];

export const Navigation = () => {
  const { user }: NavigationStoreon = useStoreon('user');
  const { t } = useTranslation();

  return (
    <Menu className="section">
      {menus.map(({ title, routes }) => (
        <React.Fragment key={title}>
          <Menu.Label>{title}</Menu.Label>
          <Menu.List>
            {routes
              .filter(route =>
                !route.requiresAuth ||
                (route.requiresAuth && user.isAuthenticated)
                  ? route
                  : null,
              )
              .map(({ component, title, path }) => (
                <Menu.List.Item
                  as={Link}
                  to={path}
                  onMouseOver={() => component.preload()}
                  onFocus={() => component.preload()}
                  key={title}
                >
                  {t(title)}
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
        aria-label={t('githubLink')}
      >
        <GitHubTag />
      </a>
    </Menu>
  );
};
