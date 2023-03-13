import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 引入小仓库
import Home from './home'
import Search from './search'

export default new Vuex.Store({
    // 模块式开发
    modules: {
        Home,
        Search
    }
})