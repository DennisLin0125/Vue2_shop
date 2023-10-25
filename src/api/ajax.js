// 對於axios二次封裝
import axios from "axios";
// 引入進度條
import nProgress from "nprogress";
// 引入進度條樣式
import 'nprogress/nprogress.css'
// start方法代表進度條開始
// done方法代表進度條結束

// 1. 利用axios物件的create方法,去創建一個實例
// 2. request就是axios
const request = axios.create({
    // 配置對象
    // 基礎路徑
    baseURL: "/api",
    // 請求時間5s
    timeout: 5000,
})
// 請求攔截器,在發送請求之前,請求攔截器可以偵測到
// config 是一個配置對象,裡面有一個很重要的的屬性,header
request.interceptors.request.use(config => {
    // 進度條開始動
    nProgress.start();
    return config;
})

// 響應攔截器
request.interceptors.response.use(response => {
    // 進度條結束
    nProgress.done();
    return response.data;
}, error => {
    return Promise.reject(error)
})

export default request;