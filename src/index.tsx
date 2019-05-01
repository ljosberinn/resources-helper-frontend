import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './index.scss';
import ResourcesHelper from './ResourcesHelper';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}

ReactDOM.render(<ResourcesHelper />, document.getElementById('root'));
