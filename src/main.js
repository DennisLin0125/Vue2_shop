import Vue from 'vue'
import App from './App.vue'
// 三級連動組件  -- 全局組件
import TypeNav from '@/pages/Home/TypeNav'
// 註冊為全局組件
Vue.component(TypeNav.name, TypeNav)

// 引入路由
import router from '@/router'
// 測試
import {reqCategoryList}from '@/api'
reqCategoryList();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 註冊路由
  router,
}).$mount('#app')
