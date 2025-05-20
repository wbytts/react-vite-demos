import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './redux/store';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById('root')).render(<App />)


// 也可以订阅 state变化，直接重新 render
/*
store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
*/
