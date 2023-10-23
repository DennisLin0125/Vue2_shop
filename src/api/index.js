// 所有API統一管理
import request from "./request";

// 三級連動API
// /api/product/getBaseCategoryList  get  參數:無

export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'GET',
    })
}
