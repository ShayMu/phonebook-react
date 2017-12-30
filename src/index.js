/* eslint-disable no-console */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import './styles/fonts/css/fontawesome.min.css';
import './styles/fonts/css/fa-solid.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
