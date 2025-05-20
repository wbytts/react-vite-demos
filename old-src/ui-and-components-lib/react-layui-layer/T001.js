import React, { createContext, useState, useEffect, useCallback, useReducer, useMemo, useRef, useContext } from "react";
import ReactDOM from "react-dom/client";
import Layer from "react-layui-layer"

/*
  Layer的属性：
      visible：是否显示窗体，默认false
      shade： 遮罩，遮罩 即弹层外区域，默认0
      type：基本层类型 可传入的值有：1（页面层，子节点为dom）2（iframe层，子节点为地址），默认1
      title：标题 弹出框的标题，默认无
      maxmin：最大最小化 该参数值对该参数值对type:1 type:2 有效，默认显示最大小化按钮。默认true
      width：窗体宽度，默认800px
      height：窗体高度，默认500px
      onCancel：当关闭窗体时回调方法
 */

const useDialog = (jsx, setCurrentDialog) => {
  const [isShow, setIsShow] = useState(false);
  const show = () => setIsShow(true);
  const close = () => setIsShow(false);
  const dialog = <Layer visible={isShow} onCancel={close} >{jsx}</Layer>

  return { show, close, dialog }
}

const App = props => {

  const { show: show1, dialog: dialog1 } = useDialog(<div>这是第一个弹窗</div>)
  const { show: show2, dialog: dialog2 } = useDialog(<div>这是第二个弹窗</div>)
  const { show: show3, dialog: dialog3 } = useDialog(<div>这是第三个弹窗</div>)

  return <div>
    <button onClick={show1}>显示弹窗1</button>
    <button onClick={show2}>显示弹窗2</button>
    <button onClick={show3}>显示弹窗3</button>

    {dialog1}
    {dialog2}
    {dialog3}
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
