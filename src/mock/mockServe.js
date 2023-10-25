import Mock from "mockjs";
// 引入數據
// webpack 默認對外暴露的文件: 圖片,json
import banner from "./banner.json";
import floor from "./floor.json";

// mock數據  參數:   地址     請求數據
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
