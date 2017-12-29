/* eslint-disable no-console */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/fonts/css/fontawesome.min.css';
import './styles/fonts/css/fa-solid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
