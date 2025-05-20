import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {

  state = {
    form: {
      text: "",
      content: '',
      sex: 1,
      enable: 0
    }
  }

  initForm = () => {

  }

  handleFormChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: value
      }
    })
  }

  componentDidMount() {

  }

  render() {
    return <div>
      {JSON.stringify(this.state.form)}
      <br/>
      <input name="text" type="text" value={this.state.form.text} onChange={this.handleFormChange}/>
      <textarea name="content" value={this.state.form.content} cols="30" rows="10" onChange={this.handleFormChange}></textarea>
      <select name="sex" value={this.state.form.sex} onChange={this.handleFormChange}>
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
      <input name="enable" type="checkbox" checked={this.state.form.enable} onChange={this.handleFormChange}/>
      <input name="type" type="radio" value={this.state.form.type} onChange={this.handleFormChange}/>
      <input name="type" type="radio" value={this.state.form.type} onChange={this.handleFormChange}/>
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

