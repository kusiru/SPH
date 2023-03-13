import Vue from 'vue'
import App from '@/App.vue'
// 引入路由
import router from '@/router'
// 引入store
import store from '@/store'
//三级联动组件
import TypeNav from '@/components/TypeNav'

// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
