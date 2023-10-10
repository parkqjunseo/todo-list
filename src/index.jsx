import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { reducer } from './common/reducer';
import App from './App';

const reduxStore = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
);
