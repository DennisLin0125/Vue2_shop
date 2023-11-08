import { reqAddressInfo, reqOrderInfo } from "@/api";

export const addressInfoStore = {
  // 準備actions用於響應組件中的動作
  actions: {
    // 獲取用戶地址訊息
    async getUserAddress({ commit }) {
      let result = await reqAddressInfo();
      if (result.code == 200) {
        commit("GETUSERADDRESS", result.data);
      }
    },
    // 獲得訂單訊息
    async getOrderInfo({ commit }) {
      let result = await reqOrderInfo();
      if (result.code == 200) {
        commit("GETORDERINFO", result.data);
      }
    },
  },
  // 準備mutations用於操作數據(state)
  mutations: {
    GETUSERADDRESS(state, userAddress) {
      state.userAddress = userAddress;
    },
    GETORDERINFO(state, orderInfo) {
      state.orderInfo = orderInfo;
    },
  },
  // 準備state用於存放數據
  state: {
    // 初始值
    userAddress: [],
    orderInfo: {},
  },
  // 計算屬性
  getters: {},
};
