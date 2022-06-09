/**
 * 能發送異步 ajax 請求的函數模塊
 * 封裝 ajax 庫
 * 函數的返回值是 Promise 對象
 * 1. 優化：統一處理請求異常?
 *    在外層包一個 Promise 對象，在請求出錯時不 reject，而是顯示錯誤提示
 */

import axios from "axios";

export default function ajax(url, data = {}, type) {
  switch (type) {
    case "GET":
      return null;
    case "POST":
      return axios({
        method: type,
        url,
        data
      });
    default:
      return axios.post(url, data);
  }
  // if (type === "POST") {
  //   return axios({
  //     method: type,
  //     url,
  //     data
  //   })
  // } else {
  //   return axios.post(url, data);
  // }
}
