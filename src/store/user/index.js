import { reqGetcode, reqUserRegister, reqUserLogin } from "@/api";

export const userStore = {
  // 準備actions用於響應組件中的動作
  actions: {
    // 獲取驗證碼
    async getCode({ commit }, phone) {
      let result = await reqGetcode(phone);
      if (result.code == 200) {
        commit("GETCODE", result.data);
        return "ok";
      } else {
        return Promise.reject(new Error("failed"));
      }
    },
    // 用戶註冊
    async userRegister({ commit }, data) {
      let result = await reqUserRegister(data);
      if (result.code == 200) {
        alert("註冊" + result.message);
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    // 用戶登入
    async userLogin({ commit }, data) {
      let result = await reqUserLogin(data);
      if (result.code == 200) {
        alert("登入" + result.message);
        commit("USERLOGIN", result.data.token);
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
  },
  // 準備mutations用於操作數據(state)
  mutations: {
    GETCODE(state, code) {
      state.code = code;
    },
    USERLOGIN(state, token) {
      state.token = token;
    },
  },
  // 準備state用於存放數據
  state: {
    code: "",
    token: "",
  },
  // 計算屬性
  getters: {},
};
