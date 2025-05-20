import React, { useState, useCallback } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import styled from 'styled-components';


// 自定义Hook
function useVisible(initVal = false) {
  const [visible, setVisible] = useState(initVal);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  return { visible, show, hide };
}

const ScWrapper = styled.div`
  div {
    width: 200px;
    height: 200px;
    border: 1px solid red;
  }
`;

const App = props => {
  const boxVisible = useVisible();

  return (
    <ScWrapper>
      <button onClick={boxVisible.show}>显示</button>
      <button onClick={boxVisible.hide}>隐藏</button>
      <br />
      {boxVisible.visible && <div></div>}
    </ScWrapper>
  );
};

const mydiv = (
  <div>
    <App />
  </div>
);

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
