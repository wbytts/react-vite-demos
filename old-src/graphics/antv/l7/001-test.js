import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import { Scene } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

let scene = null;

function initScene() {
  scene = new Scene({
    id: 'map',
    map: new GaodeMap({
      style: 'light',
      center: [110.770672, 34.159869],
      pitch: 0,
      token: 'fa8e43cfe16730df2db6fe6065b3817b',
      zoom: 4.5,
    }),
  });
}

const App = () => {
  useEffect(() => {
    // 初始化 Scene
    initScene();
  }, []);

  return (
    <div>
      <div id="map" style={{ minHeight: '500px', justifyContent: 'center;position: relative' }} />
    </div>
  );
};

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(<App />);
