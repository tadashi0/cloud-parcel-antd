import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
  .render(<Provider store={store}>
    <App />
  </Provider>);