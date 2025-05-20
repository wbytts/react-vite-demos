import React, {
  useMemo,
  useRef,
} from 'react';
import ReactDOM from 'react-dom/client';

function Text() {
  return <div>Text</div>
}

class ComA extends React.Component {

  saveElement = <Text />

  render() {
    return <div>
      {this.saveElement}
    </div>
  }
}

function ComB () {
  const saveElement = useRef(<Text />)
  return <div>
    {saveElement.current}
  </div>
}

function ComC() {
  // 只有当后面的依赖项变化的时候，才会重新渲染 Text组件
  const saveElement = useMemo(() => <Text />, [])
  return <div>
    {saveElement}
  </div>
}

const App = props => {
  return <div>
    <ComA></ComA>
    <ComB></ComB>
    <ComC></ComC>
  </div>;
};


const page = (
  <div>
    <App />
  </div>
);

const containerDOM = document.querySelector('#app');
const root = ReactDOM.createRoot(containerDOM);
root.render(page);


