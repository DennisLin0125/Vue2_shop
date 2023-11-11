// 引入路由組件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";

import GroupOrder from "@/pages/Center/GroupOrder";
import MyOrder from "@/pages/Center/MyOrder";

// 路由配置訊息
export default [
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
    path: "/center",
    component: Center,
    meta: {
      show: true,
    },
    children: [
      {
        path: "/center",
        redirect: "myorder",
      },
      {
        path: "grouporder",
        component: GroupOrder,
        meta: {
          show: true,
        },
      },
      {
        path: "myorder",
        component: MyOrder,
        meta: {
          show: true,
        },
      },
    ],
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: {
      show: true,
    },
  },
  {
    path: "/pay",
    component: Pay,
    meta: {
      show: true,
    },
  },
  {
    path: "/trade",
    component: Trade,
    meta: {
      show: true,
    },
  },
  {
    path: "/detail/:skuId",
    component: Detail,
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
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true,
    },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: {
      show: true,
    },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
    meta: {
      show: true,
    },
  },
];
