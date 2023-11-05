import {
  reqGetcode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqUserLogout,
} from "@/api";

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
        commit("USERLOGIN", result.data.token);
        // 持久化存儲token
        localStorage.setItem("TOKEN", result.data.token);
        return "ok";
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    // 獲取用戶訊息
    async getUserInfo({ commit }) {
      let result = await reqUserInfo();
      if (result.code == 200) {
        commit("GETUSERINFO", result.data);
        return 'ok'
      }else{
        return Promise.reject(new Error('faled'))
      }
    },
    // 用戶登出
    async userLogout({ commit }) {
      let result = await reqUserLogout();
      if (result.code == 200) {
        commit("USERLOGOUT");
        return "ok";
      } else {
        return Promise.reject(result.message);
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
    GETUSERINFO(state, userInfo) {
      state.userInfo = userInfo;
    },
    USERLOGOUT(state) {
      state.token = "";
      state.userInfo = {};
      localStorage.removeItem("TOKEN");
    },
  },
  // 準備state用於存放數據
  state: {
    code: "",
    token: localStorage.getItem("TOKEN"),
    userInfo: {},
  },
  // 計算屬性
  getters: {},
};
