import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';

import './styles/style.scss';

ReactDOM.render((
    <App />
  ), document.getElementById('app')
);
