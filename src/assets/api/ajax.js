/**
 * 能發送異步 ajax 請求的函數模塊
 * 封裝 ajax 庫
 * 函數的返回值是 Promise 對象
 */

import axios from "axios";

export default function ajax(url, data = {}, type = "GET") {
  if (type === "GET") {
    return axios.get(url, {
      param: data,
    });
  } else {
    return axios.post(url, data);
  }
}

// 登入接口
// ajax("/login", { username: "Tom", password: "123" }, "POST").then();
// 添加用戶接口
// ajax(
//   "/manage/user/dd",
//   { username: "Tom", password: "123", phone: "123123" },
//   "POST"
// ).then();
