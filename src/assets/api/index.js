/**
 * 要求：能根據接口文檔定義接口請求
 * 包含應用中所有接口請求函數的模塊
 * 每個函數的返回值都是 Promise
 */
import ajax from "./ajax";

// TODO 登入換成 Hex api
const apipathUrl = process.env.REACT_APP_APIPATH;
const apiUrl = process.env.REACT_APP_URL;
// 登入
export const reqLogin = (email, password) =>
  ajax(`${apipathUrl}/api/auth/login`, { email, password }, "POST");

export const reqToken = (api_token) =>
  ajax(`${apipathUrl}/api/auth/check`, { api_token }, "POST");

// 登出
export const reqLogout = (api_token) =>
  ajax(`${apipathUrl}/api/auth/logout`, { api_token }, "POST");

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
};

// 獲取商品分頁列表
export const reqProducts = () => {
  return ajax();
};

/**
 * 搜索商品分頁列表（根據商品名稱/商品描述）
 * searchType: 搜索類型，productName/productDesc
 * 變量當屬性名，需加[]
 */
export const reqSearchProducts = ({pageNum, pageSize, searchName, searchType}) => ajax('', {
	pageNum,
	pageSize,
	[searchType]: searchName
}, "GET")
