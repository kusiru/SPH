// 引入
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

//使用插件
Vue.use(VueRouter)

// 先把VueRouter原型对象的push方法保存起来
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace


// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location, resolve, reject) {
    if (resolve && reject) {
        return originalPush.call(this, location, resolve, reject)
    } else {
        return originalPush.call(this, location, () => {}, () => {})
    }
}
VueRouter.prototype.replace = function push(location, resolve, reject) {
    if (resolve && reject) {
        return originalReplace.call(this, location, resolve, reject)
    } else {
        return originalReplace.call(this, location, () => {}, () => {})
    }
}


// 配置路由
export default new VueRouter({
    // 配置
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                showFooter: true
            }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
            component: Search,
            meta: {
                showFooter: true
            },
            //props的第三种写法，值为函数
            props($route){
                return {
                    categoryName:$route.query.categoryName,
                    category1Id:$route.query.category1Id,
                }
            }
        },
        {
            path: '/login',
            component: Login,
            meta: {
                showFooter: false
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                showFooter: false
            }
        },
        // 重定向,访问/的时候,重定向到/home
        {
            path: '*',
            redirect: '/home'
        }
    ]
})
