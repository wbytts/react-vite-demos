import React from 'react';
import ReactDOM from 'react-dom/client';

import { useRequest } from 'ahooks';

const Demo = props => {
  return (
    <div>
      <div></div>
    </div>
  );
};

const App = () => <div></div>;


const appDOM = document.querySelector('#root');
const root = ReactDOM.createRoot(appDOM);
root.render(<App />);




