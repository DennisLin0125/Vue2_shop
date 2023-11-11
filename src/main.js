import Vue from "vue";
import App from "./App.vue";
// 三級連動組件  -- 全局組件
import TypeNav from "@/components/TypeNav";
// 分頁器 -- 全局組件
import Pagination from "@/components/Pagination";
import { Button,MessageBox } from 'element-ui';

// 註冊為全局組件
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);
// 第一種註冊UI
Vue.component(Button.name, Button);
// 第二種方式
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 引入mockServe.js
import "@/mock/mockServe";
// 引入swiper樣式
import "swiper/css/swiper.css";
// 引入路由
import router from "@/router";
// 引入store
import store from "@/store";

// 統一接收API文件
import * as API from '@/api'

// 引入懶加載
import VueLazyload from 'vue-lazyload';
// 引入gif
import atm from '@/assets/atm.gif';
// 使用插件
Vue.use(VueLazyload,{
  loading: atm,
})

Vue.config.productionTip = false;


// 引入自定義插件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
  name:"upper"
});

new Vue({
  render: (h) => h(App),
  // 註冊路由,這時候所有組件身上都有$route和$router屬性
  router,
  // 註冊store,這時候所有組件都會多$store屬性
  store,
  // 註冊全局總線
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
}).$mount("#app");
