import React from 'react';
import ReactDOM from 'react-dom/client';
import { useMouse, useRequest } from 'ahooks';

const App = () => {
  return (
    <div>
      <button></button>
    </div>
  );
};

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(<App />);
