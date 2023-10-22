/**
 * 配置路由的地方
 */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 引入路由組件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

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
    originPush.call(this,location,resolve, reject)
  }else{
    originPush.call(this,location,()=>{}, ()=>{})
  }
};

// 改寫replace
VueRouter.prototype.replace = function (location, resolve, reject){
    if (resolve && reject) {
        originReplace.call(this,location,resolve, reject)
    }else {
        originReplace.call(this,location,()=>{}, ()=>{})
    }
}

export default new VueRouter({
  routes: [
    {
      path: "*",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false,
      },
    },
    {
      name: "search",
      path: "/search/:keyword",
      component: Search,
      meta: {
        show: true,
      },
    },
  ],
});
