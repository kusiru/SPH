import { reqCategoryList } from "@/api";

const state = {
    categoryList: []
    // 存储token
}

const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit('CATEGORYLIST', result.data)
        }
    }
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const getters = {
}

export default {
    actions,
    mutations,
    state,
    getters
}