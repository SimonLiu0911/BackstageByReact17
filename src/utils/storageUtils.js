/* eslint-disable import/no-anonymous-default-export */
/**
 * 進行 Local 數據存儲管理的工具模塊
 */
const USER_KEY = "user_key"

export default {
  // 保存 User
  saveUser(user) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  // 讀取 User
  getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY) || "{}");
  },
  // 刪除 User
  removeUser() {
    return sessionStorage.removeItem(USER_KEY);
  }
}