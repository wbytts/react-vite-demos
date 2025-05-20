import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
  state = {};

  saveData = (name, data) => {
    console.log(`保存数据: ${name} = ${data}`);
    this.setState({ name: data });
  };

  show = () => {
    console.log(this.data.msg);
  };

  render() {
    return (
      <div>
        <input onChange={event => this.saveData('msg', event.target.value)} />
        <button onClick={this.show}>按钮</button>
      </div>
    );
  }
}

const mydiv = (
  <div>
    <Demo />
  </div>
);

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(mydiv);
