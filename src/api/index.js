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
export const reqGetSearchInfo = (params) => {
  return request({
    url: "/list",
    method: "POST",
    data: params,
  });
};

// 獲取產品詳細訊息  /api/item/{skuID}  GET
export const reqGoodsInfo = (skuID) => {
  return request({
    url: `/item/${skuID}`,
    method: "GET",
  });
}

// 將產品添加到購物車 /api/cart/addToCart/{skuID}/{skuNum}  POST
export const reqAddOrUpdateShopCart = (skuID, skuNum) => {
  return request({
    url: `/cart/addToCart/${skuID}/${skuNum}`,
    method: "POST",
  });
}

// 獲取購物車數據列表  /api/cart/cartList   GET
export const reqGetCartList = () => {
  return request({
    url: "/cart/cartList",
    method: "GET",
  });
}