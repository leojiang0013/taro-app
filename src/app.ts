import { useEffect } from "react";
import { useDidShow, useDidHide } from "@tarojs/taro";
// Taro 额外添加的 hooks 要从 '@tarojs/taro' 中引入


// 假设我们要使用 Redux
// import { Provider } from 'react-redux'
// import configStore from './store'

// 全局样式
// import './app.css'

// const store = configStore()

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => { });

  // 对应 onShow
  useDidShow(() => { });

  // 对应 onHide
  useDidHide(() => { });

  return (
    props.children
  );
}

export default App;
