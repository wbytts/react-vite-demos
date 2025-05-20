import React from 'react';
import ReactDOM from 'react-dom/client';
import { useMouse } from 'ahooks';

const App = () => {
  const { screenX, screenY, clientX, clientY, pageX, pageY } = useMouse();
  return (
    <div>
      <div>screenX {screenX}</div>
      <div>screenY {screenY}</div>
      <div>clientX {clientX}</div>
      <div>clientY {clientY}</div>
      <div>pageX {pageX}</div>
      <div>pageY {pageY}</div>
    </div>
  );
};

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(<App />);
