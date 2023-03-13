// 当前模块：api统一管理
import request from "@/api/request";

// 三级联动接口
// /api/product/getBaseCategoryList  GET

export const reqCategoryList = () => {
    // 返回值是一个promise对象
    return request({
        method: "GET",
        url: "/product/getBaseCategoryList"
    })
}