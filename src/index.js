
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'

import history from './config/historyRouter'
import { store, persistor } from './config/store'
import App from './modules/App'
import './modules/shared/styles/index.css'

render((
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>    
        <Router history={history}>
          <App />
        </Router>
      </PersistGate>
  </Provider>
), document.getElementById('root'));
