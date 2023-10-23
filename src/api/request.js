// 對於axios二次封裝
import axios from "axios";

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
request.interceptors.request.use(config => config )

// 響應攔截器
request.interceptors.response.use(response => response.data, error => Promise.reject(error))

export default request;