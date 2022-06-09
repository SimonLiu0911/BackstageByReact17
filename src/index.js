import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.less";
import memoryUtils from "./utils/memoryUtils"
import storageUtils from "./utils/storageUtils"

// 一上來先讀取 sessionStorage 中的 User
const user = storageUtils.getUser('user_key');
memoryUtils.user = user;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
