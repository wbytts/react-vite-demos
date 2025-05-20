import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from 'react';
import ReactDOM from 'react-dom/client';

// *** antd v4 配置 start
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import '@/index.css';

import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

//! https://ant.design/

import { Button } from 'antd';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div>
        <Button type="primary">一个按钮</Button>
      </div>
    </ConfigProvider>
  );
}

const appElement = document.querySelector('#app');
const root = ReactDOM.createRoot(appElement);
root.render(<App />);



