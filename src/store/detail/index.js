// Detail 的store
import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
// 封裝臨時遊客身分的模組
import { getUUID } from "@/utils/uuid_token";

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
    // 將產品添加到購物車中
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
      let result = await reqAddOrUpdateShopCart(skuId, skuNum);
      if (result.code == 200) {
        return Promise.resolve("ok");
      }
      return Promise.reject(new Error("failed"));
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
    // 遊客的臨時身分
    uuid_token: getUUID(),
  },
  // 計算屬性
  getters: {
    categoryView(state) {
      return state.goodsInfo.categoryView || {};
    },
    skuInfo(state) {
      return state.goodsInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
      return state.goodsInfo.spuSaleAttrList || [];
    },
  },
};
