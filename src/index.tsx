import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './styles/index.scss';
import ResourcesHelper from './ResourcesHelper';

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  const axe = require('react-axe');
  whyDidYouRender(React);
  axe(React, ReactDOM, 1000);
} else {
  const Sentry = require('@sentry/browser');
  const LogRocket = require('logrocket');

  Sentry.init({
    dsn: 'https://7b1b186565cf49e282d282f55c8e615c@sentry.io/1422548',
  });

  LogRocket.init('cnrdnk/resources-helper');

  // @ts-ignore
  LogRocket.getSessionURL(sessionURL => {
    // @ts-ignore
    Sentry.configureScope(scope => {
      scope.setExtra('sessionURL', sessionURL);
    });
  });
}

ReactDOM.render(<ResourcesHelper />, document.getElementById('root'));
