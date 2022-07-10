/**
 * 要求：能根據接口文檔定義接口請求
 * 包含應用中所有接口請求函數的模塊
 * 每個函數的返回值都是 Promise
 */
import ajax from "./ajax";

const apiUrl = process.env.REACT_APP_URL;
// 登入
export const reqLogin = (email, password) =>
  ajax(`${apiUrl}/login`, { email, password }, "POST");

// 添加用戶
// export const reqAddUser = (user) => ajax("/manage/user/add", user, "POST");

// json請求函數
export const reqWeather = () => {};

// 取得一級/二級分類列表
export const reqCategories = (parentId) =>
  ajax(`${apiUrl}/categories`, { parentId }, "GET");

// 添加分類列表
export const reqAddCategories = (parentId, categoryName) =>
  ajax("/categories", { parentId, categoryName }, "POST");

// 更新分類列表
export const reqUpdateCategories = (id, name) => {
	return ajax(`/categories/${id}`, { id, name }, "PATCH");
}

// 獲取商品分頁列表
export const reqProducts = () => {
	return ajax()
}