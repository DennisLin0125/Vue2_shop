// 所有API統一管理
import request from "./ajax";
import mockRequest from "./mockAjax";

// 三級連動API
// /api/product/getBaseCategoryList  get  參數:無
export const reqCategoryList = () => {
  return request({
    url: "/product/getBaseCategoryList",
    method: "GET",
  });
};

// 獲取mockBanner數據
export const reqGetBannerList = () => {
  return mockRequest({
    url: "/banner",
    method: "GET",
  });
};

// 獲取floor數據
export const reqGetFloorList = () => {
  return mockRequest({
    url: "/floor",
    method: "GET",
  });
};

// 獲取搜索模塊數據   /api/list   POST
/**
 * {
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}

 */
export const reqGetSearchInfo = (params) => {
  return request({
    url: "/list",
    method: "POST",
    data: params,
  });
};
