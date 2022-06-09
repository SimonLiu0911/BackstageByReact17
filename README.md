# Backstage

## 項目結構

src
|-api (ajax 相關)
|-assets (公用資源)
|-components (非路由組件)
|-config (配置)
|-pages (路由組件)
|-utils (工具模塊)
|App.js (應用根組件)
|index.js (入口 js)

## 模擬 REST APIs

json-server模擬data
json-server-auth模擬login

## async, await

作用：
簡化 Promise 對象的使用，不用再 .then() 來指定成功/ .catch() 失敗的回調函數
以同步編碼(沒有回調函數了)方式實現異步流程
