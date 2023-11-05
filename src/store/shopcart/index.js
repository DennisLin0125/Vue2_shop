import { reqGetCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/api";

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
    // 刪除購物車
    async deleteCartById({ commit }, skuId) {
      let result = await reqDeleteCartById(skuId);
      if (result.code == 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('failed'))
      }
    },
    // 修改選中狀態
    async updateCheckedById({ commit }, { skuId, isChecked }) {
      let result = await reqUpdateCheckedById(skuId, isChecked);
      if (result.code == 200) {
        return 'ok'
      } else {
        return Promise.reject(new Error('failed'))
      }
    },
    // 刪除全部勾選的產品
    deleteAllCheckedCart({ dispatch, getters }) {
      // 獲取購物車全部屬性
      let PromiseAll = [];
      getters.cartList.cartInfoList.forEach(item => {
        // 派發action
        if (item.isChecked == 1) {
          let promise = dispatch('deleteCartById', item.skuId);
          PromiseAll.push(promise)
        }
      });
      return Promise.all(PromiseAll);
    },
    // 修改全部商品的狀態
    updateAllCartIsChecked({ dispatch, getters }, isChecked) {
      let PromiseAll = [];
      getters.cartList.cartInfoList.forEach(item => {
        let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
        PromiseAll.push(promise)
      })
      return Promise.all(PromiseAll);
    }
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
    cartList(state) {
      return state.shopCartList[0] || {};
    }
  },
};
