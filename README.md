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

json-server 模擬 data
json-server-auth 模擬 login

## async, await

作用：
簡化 Promise 對象的使用，不用再 .then() 來指定成功/ .catch() 失敗的回調函數
以同步編碼(沒有回調函數了)方式實現異步流程

## jsonp 解決 ajax 跨域的原理

    1. jsonp 只能解決 GET 類型的 ajax 請求跨域問題
    2. jsonp 請求不是 ajax 請求，而是一般的 get 請求
    3. 基本原理
      瀏覽器端：
        動態生成 <script> 來請求後台接口(src 就是接口的 url)。
      服務器端：
        接收到請求處理產生結果數據後，返回一個函數調用的 js 代碼，並將結果數據作為實參傳入函數調用。
      瀏覽器端：
        收到響應自動執行函數調用的 js 代碼，也就執行了提前定義好的回調函數，並得到了需要的結果數據。

## 分頁

    1. 純前台分頁：一次獲取所有數據，翻頁時不需要再發請求
      請求接口：不需要指定請求參數(頁碼和每頁數量)
    2. 基於後台分頁：每次只獲取當前夜的數據，翻頁時要發請求
      請求接口：需要指定請求參數(頁碼和每頁數量)
