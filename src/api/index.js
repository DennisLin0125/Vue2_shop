// 所有API統一管理
import request from "./ajax";
import mockRequest from './mockAjax'

// 三級連動API
// /api/product/getBaseCategoryList  get  參數:無
export const reqCategoryList = () => {
    return request({
        url: '/product/getBaseCategoryList',
        method: 'GET',
    })
}

// 獲取mockBanner數據
export const reqGetBannerList = () => {
    return mockRequest({
        url: '/banner',
        method: 'GET',
    })
}
