﻿import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

function Demo() {
  return (
    <div>
      <span>hello world</span>
    </div>
  );
}

const StyledWrapper = styled.div`
  span {
    font-size: 14px;
    color: red;
  }
  div {
    width: 200px;
    height: 100px;
    border: 1px solid red;
  }
`;

const mydiv = (
  <StyledWrapper>
    <Demo></Demo>
  </StyledWrapper>
);

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
