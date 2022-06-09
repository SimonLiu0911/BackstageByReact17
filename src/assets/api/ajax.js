/**
 * 能發送異步 ajax 請求的函數模塊
 * 封裝 ajax 庫
 * 函數的返回值是 Promise 對象
 */

import axios from "axios";

export default function ajax(url, data = {}, type = "POST") {
  if (type === "POST") {
    // return axios.get(url, {
    //   param: data,
    // });
    return axios({
      method: type,
      url,
      data
    })
  } else {
    return axios.post(url, data);
  }
}
