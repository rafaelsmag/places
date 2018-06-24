
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';

import history from './config/historyRouter'
import { store } from './config/store'
import App from './modules/App'

render((
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
  </Provider>
), document.getElementById('root'));
