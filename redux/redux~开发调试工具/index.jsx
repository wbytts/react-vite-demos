import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  // 应用中，App中，需要 store的组件，Provider会自动传递过去
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

