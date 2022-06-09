/**
 * 要求：能根據接口文檔定義接口請求
 * 包含應用中所有接口請求函數的模塊
 * 每個函數的返回值都是 Promise
 */
import ajax from "./ajax";

const apiUrl = process.env.REACT_APP_URL;
export const reqLogin = (email, password) =>
  ajax(`${apiUrl}/login`, { email, password }, "POST");

// 添加用戶
export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");
