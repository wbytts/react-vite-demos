import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const App = props => {
  return <div></div>;
};


const page = (
  <>
    <App/>
  </>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);

