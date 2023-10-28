import Vue from "vue";
import App from "./App.vue";
// 三級連動組件  -- 全局組件
import TypeNav from "@/components/TypeNav";
// 分頁器 -- 全局組件
import Pagination from "@/components/Pagination";
// 註冊為全局組件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);

// 引入mockServe.js
import "@/mock/mockServe";
// 引入swiper樣式
import "swiper/css/swiper.css";
// 引入路由
import router from "@/router";
// 引入store
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 註冊路由,這時候所有組件身上都有$route和$router屬性
  router,
  // 註冊store,這時候所有組件都會多$store屬性
  store,
  // 註冊全局總線
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
