import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import MyCom from './MyCom'

const App = props => {
  return <div>
    <MyCom />
  </div>;
};


const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

