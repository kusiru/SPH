import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";

const request = axios.create({
    baseURL: "/api",
    timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use(config => {
    // 启动进度条
    nprogress.start()
    return config
})

// 响应拦截器
request.interceptors.response.use(res => {
    // 关闭进度条
    nprogress.done()
    return res.data
}, err => {
    return Promise.reject(new Error(err.message))
})

export default request