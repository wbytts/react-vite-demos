import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './redux/store';


const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(<App />);

// 最外部监测redux的变化，更新组件
/*
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
*/
