import React from 'react';
import { GitHubTag } from './GitHubTag';
import { Footer } from 'rbx';
import { Link } from 'react-router-dom';

export const PageFooter = () => (
  <Footer className="has-text-centered">
    <a
      rel="noreferrer noopener"
      href="https://github.com/ljosberinn/resources-helper"
      target="_blank"
      className="github-corner"
      aria-label="View source on GitHub"
    >
      <GitHubTag />
    </a>
    <Link to="/tos">Terms of Service & Privacy Policy</Link> | <Link to="/contact">Contact</Link> | <Link to="/donate">Donate</Link>
  </Footer>
);
