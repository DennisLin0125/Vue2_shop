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

// 刪除購物車產品的API  /api/cart/deleteCart/{skuId}  DELETE
export const reqDeleteCartById = (skuId) => {
  return request({
    url: `/cart/deleteCart/${skuId}`,
    method: "DELETE",
  });
}

// 修改商品選中狀態  /api/cart/checkCart/{skuId}/{isChecked}   GET
export const reqUpdateCheckedById = (skuId, isChecked) => {
  return request({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "GET",
  });
}

// 獲取驗證碼  /api/user/passport/sendCode/{phone}  GET
export const reqGetcode = (phone) => {
  return request({
    url: `/user/passport/sendCode/${phone}`,
    method: "GET",
  });
}

// 用戶註冊  /api/user/passport/register  POST  參數: phone code password
export const reqUserRegister = (data) => {
  return request({
    url: `/user/passport/register`,
    method: "POST",
    data,
  });
}

// 用戶登入  /api/user/passport/login   POST  參數: phone password
export const reqUserLogin = (data) => {
  return request({
    url: `/user/passport/login`,
    method: "POST",
    data,
  });
}

//! 獲取用戶訊息 (需要帶token) /api/user/passport/auth/getUserInfo   GET 
export const reqUserInfo = () => {
  return request({
    url: `/user/passport/auth/getUserInfo`,
    method: "GET",
  });
}

//* 登出 /api/user/passport/logout  GET
export const reqUserLogout = () => {
  return request({
    url: `/user/passport/logout`,
    method: "GET",
  });
}

// * 獲取用戶地址訊息  /api/user/userAddress/auth/findUserAddressList  GET
export const reqAddressInfo = () => {
  return request({
    url: `/user/userAddress/auth/findUserAddressList`,
    method: "GET",
  });
}

// *獲取訂單交易頁訊息  /api/order/auth/trade  GET
export const reqOrderInfo = () => {
  return request({
    url: `/order/auth/trade`,
    method: "GET",
  });
}