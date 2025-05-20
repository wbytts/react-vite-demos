import React from 'react';
import ReactDOM from 'react-dom/client.js';
import App from './App.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 应用中，App中，需要 store的组件，Provider会自动传递过去
  // 目的：让App的所有后代容器组件都能接收到store
  <Provider store={store}>
    <App />
  </Provider>
);

