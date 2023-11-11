/**
 * 配置路由的地方
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
// 引入store
import store from "@/store";

Vue.use(VueRouter);

// 先儲存原本的VC上的push
let originPush = VueRouter.prototype.push;
// 先儲存原本的VC上的replase
let originReplace = VueRouter.prototype.replace;

// 改寫push
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call和apply
    // 相同處: 都可以調用函數1次,都可以竄改函數的上下文1次
    // 不同處: call與apply傳遞參數: call傳遞參數用逗號隔開 apply傳遞參數是用數組
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

// 改寫replace
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let router = new VueRouter({
  routes,
  // 滾動行為
  scrollBehavior(to, from, savePosition) {
    // 代表滾動條在最上方
    return { y: 0 };
  },
});

// 全局守衛
router.beforeEach(async (to, from, next) => {
  // 用戶登入了才有token
  let token = store.state.userStore.token;
  // 用戶訊息
  let userName = store.state.userStore.userInfo.name;

  if (token) {
    if (to.path == "/login") {
      // 已經登入了 只能去首頁
      next("/");
    } else {
      if (userName) {
        // 有用戶訊息直接放行
        next();
      } else {
        try {
          // 沒有用戶訊息則派發action 取得用戶訊息
          await store.dispatch("getUserInfo");
          // 在跳轉路由
          next();
        } catch (error) {
          alert("token已失效");
          // 派發action 清除token
          await store.dispatch("userLogout");
          // 跳轉
          next("/login");
        }
      }
    }
  } else {
    // 未登入 不能去交易和支付相關的頁面
    let toPath = to.path;
    if (
      toPath == "/trade" ||
      toPath.indexOf("pay") != -1 ||
      toPath.indexOf("/center") != -1
    ) {
      // 跳轉
      // 用query紀錄想要去的URL
      next(`/login?redirect=${toPath}`);
    } else {
      next();
    }
  }
});

export default router;
