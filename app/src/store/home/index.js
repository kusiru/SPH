import { reqCategoryList } from "@/api";

const state = {
    categoryList: [],
}

const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit('CATEGORY_LIST', result.data)
        }
    }
}
const mutations = {
    CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const getters = {
}

export default {
    namespaced:true,
    actions,
    mutations,
    state,
    getters
}