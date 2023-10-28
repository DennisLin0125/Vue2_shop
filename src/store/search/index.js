// search 的store
import { reqGetSearchInfo } from "@/api";
export const searchStore = {
  // 準備actions用於響應組件中的動作
  actions: {
    // 獲取search模塊數據
    async getSearchList({ commit }, params = {}) {
      // reqGetSearchInfo至少要傳一個空json
      let result = await reqGetSearchInfo(params);
      if (result.code == 200) {
        commit("GETSEARCHLIST", result.data);
      }
    },
  },
  // 準備mutations用於操作數據(state)
  mutations: {
    GETSEARCHLIST(state, searchList) {
      state.searchList = searchList;
    },
  },
  // 準備state用於存放數據
  state: {
    // 初始值
    searchList: {},
  },
  // 計算屬性
  getters: {
    // state就是當前倉庫中的state,並非大倉庫的state
    goodsList(state) {
      return state.searchList.goodsList || [];
    },
    trademarkList(state) {
      return state.searchList.trademarkList || [];
    },
    attrsList(state) {
      return state.searchList.attrsList || [];
    },
    getTotal(state){
      return state.searchList.total
    }
  },
};
