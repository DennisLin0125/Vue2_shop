import { reqGetCartList } from "@/api";

export const shopCartStore = {
  // 準備actions用於響應組件中的動作
  actions: {
    // 獲取shopCart模塊數據
    async getCartList({ commit }) {
      let result = await reqGetCartList();
      if (result.code == 200) {
        commit("GETCARTLIST", result.data);
      }
    },
  },
  // 準備mutations用於操作數據(state)
  mutations: {
    GETCARTLIST(state, shopCartList) {
      state.shopCartList = shopCartList;
    },
  },
  // 準備state用於存放數據
  state: {
    // 初始值
    shopCartList: [],
  },
  // 計算屬性
  getters: {
    cartList(state){
      return state.shopCartList[0]||{};
    }
  },
};
