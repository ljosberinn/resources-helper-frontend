import { Column, Menu } from 'rbx';
import React from 'react';
import createStore from 'storeon';
import useStoreon from 'storeon/react';
import { IUserState } from '../types/user';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FooterRoutes } from '../Routes';
import { GitHubTag } from './GitHubTag';

interface NavigationStoreon {
  dispatch: createStore.Dispatch;
  user: IUserState;
}

const menus = [
  {
    title: 'Meta',
    routes: FooterRoutes,
  },
];

export const Navigation = () => {
  const { user }: NavigationStoreon = useStoreon('user');
  const { t } = useTranslation();

  return (
    <Menu className="section">
      {menus.map(({ title, routes }) => (
        <>
          <Menu.Label>{title}</Menu.Label>
          <Menu.List>
            {routes
              .filter(route =>
                !route.requiresAuth ||
                (route.requiresAuth && user.isAuthenticated)
                  ? route
                  : null,
              )
              .map(({ component, title, path }, index) => (
                <Menu.List.Item
                  as={Link}
                  to={path}
                  onMouseOver={() => component.preload()}
                  onFocus={() => component.preload()}
                  key={index}
                >
                  {t(title)}
                </Menu.List.Item>
              ))}
          </Menu.List>
        </>
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
