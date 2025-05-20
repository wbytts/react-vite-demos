import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';

/*
https://styled-components.com/
*/

// 或者写成 styled("button")、styled("div") 这种

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const ScWrapper = styled.div`
  text-align: left;
  margin-top: 20px;
  border: 1px solid red;
`;

const mydiv = (
  <ScWrapper>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </ScWrapper>
);

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
