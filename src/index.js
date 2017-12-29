/* eslint-disable no-console */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
