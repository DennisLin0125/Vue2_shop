import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

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
    // 獲取首頁輪播圖數據
    async getBannerList({ commit }) {
      let result = await reqGetBannerList();
      if (result.code == 200) {
        commit("GETBANNERLIST", result.data);
      }
    },
    // 獲取floor輪播圖數據
    async getFloorList({ commit }) {
      let result = await reqGetFloorList();
      if (result.code == 200) {
        commit("GETFLOORLIST", result.data);
      }
    },
  },
  // 準備mutations用於操作數據(state)
  mutations: {
    CATEGORYLIST(state, categoryList) {
      state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
      state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
      state.floorList = floorList;
    }
  },
  // 準備state用於存放數據
  state: {
    // 初始值根據服務器返回的數據決定
    categoryList: [],
    // 輪播圖的初始數據
    bannerList: [],
    // floor初始數據
    floorList: [],
  },
  getters: {},
};
