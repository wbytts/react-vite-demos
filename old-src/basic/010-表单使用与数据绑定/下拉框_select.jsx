import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {

  state = {
    form: {
      val: 1
    }
  }

  handleSelectChange = (e) => {
    this.setState({ form: { val: e.target.value } })
  }

  render() {
    return <div>
      <h1>{this.state.form.val}</h1>
      <select value={this.state.form.val} onChange={this.handleSelectChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  }
}


const page = (
  <div>
    <App/>
  </div>
);

const containerDOM = document.querySelector("#app");
const root = ReactDOM.createRoot(containerDOM);
root.render(page);


