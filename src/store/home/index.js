import { reqCategoryList } from "@/api";

// home的store
export const homeStore = {
  // 準備actions用於響應組件中的動作
  actions: {
    // 通過API的接口像服務器發請求
    async categoryList({ commit }) {
      let result = await reqCategoryList();
      if (result.code == 200) {
        commit("CATEGORYLIST", result.data);
      }
    },
  },
  // 準備mutations用於操作數據(state)
  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList;
    },
  },
  // 準備state用於存放數據
  state: {
    // 初始值根據服務器返回的數據決定
    categoryList: [],
  },
  getters: {},
};
