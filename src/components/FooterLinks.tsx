import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IRoutes } from '../ResourcesHelper';
import { Navbar, Container } from 'rbx';
import { GitHubTag } from './GitHubTag';

interface FooterLinksProps {
  routes: IRoutes[];
}

export const FooterLinks = ({ routes }: FooterLinksProps) => {
  const { t } = useTranslation();

  return (
    <>
      <a
        rel="noreferrer noopener"
        href="https://github.com/ljosberinn/resources-helper"
        target="_blank"
        className="github-corner"
        aria-label={t('githubLink')}
      >
        <GitHubTag />
      </a>
      <Container>
        <Navbar className="has-text-centered" style={{ backgroundColor: 'transparent' }}>
          <Navbar.Segment align="end">
            {routes.map(({ path, component, title }, index) => (
              <Navbar.Item as={Link} to={path} onMouseOver={() => component.preload()} key={index}>
                {t(title)}
              </Navbar.Item>
            ))}
          </Navbar.Segment>
        </Navbar>
      </Container>
    </>
  );
};
