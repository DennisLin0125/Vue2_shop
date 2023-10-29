// Detail 的store
import { reqGoodsInfo } from "@/api";
export const detailStore = {
  // 準備actions用於響應組件中的動作
  actions: {
    // 獲取Goods模塊數據
    async getGoodsInfo({ commit }, skuID) {
      let result = await reqGoodsInfo(skuID);
      if (result.code == 200) {
        commit("GETGOODSINFO", result.data);
      }
    },
  },
  // 準備mutations用於操作數據(state)
  mutations: {
    GETGOODSINFO(state, goodsInfo) {
      state.goodsInfo = goodsInfo;
    },
  },
  // 準備state用於存放數據
  state: {
    // 初始值
    goodsInfo: {},
  },
  // 計算屬性
  getters: {},
};
