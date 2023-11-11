// 引入路由組件

// 路由配置訊息
export default [
  {
    path: "*",
    redirect: "/home",
  },
  {
    path: "/home",
    component: ()=>import('@/pages/Home'),
    meta: {
      show: true,
    },
  },
  {
    path: "/center",
    component: ()=>import('@/pages/Center'),
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
        component: ()=>import('@/pages/Center/GroupOrder'),
        meta: {
          show: true,
        },
      },
      {
        path: "myorder",
        component: ()=>import('@/pages/Center/MyOrder'),
        meta: {
          show: true,
        },
      },
    ],
  },
  {
    path: "/paysuccess",
    component: ()=>import('@/pages/PaySuccess'),
    meta: {
      show: true,
    },
  },
  {
    path: "/pay",
    component: ()=>import('@/pages/Pay'),
    meta: {
      show: true,
    },
    beforeEnter: (to, from, next) => {
      // 去支付頁面之能從交易頁面去
      if (from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: "/trade",
    component: ()=>import('@/pages/Trade'),
    meta: {
      show: true,
    },
    // 路由獨享守衛
    beforeEnter: (to, from, next) => {
      // 去交易頁面只能從購物車頁面去
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/detail/:skuId",
    component: ()=>import('@/pages/Detail'),
    meta: {
      show: true,
    },
  },
  {
    path: "/login",
    component: ()=>import('@/pages/Login'),
    meta: {
      show: false,
    },
  },
  {
    path: "/register",
    component: ()=>import('@/pages/Register'),
    meta: {
      show: false,
    },
  },
  {
    name: "search",
    path: "/search/:keyword?",
    component: ()=>import('@/pages/Search'),
    meta: {
      show: true,
    },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: ()=>import('@/pages/AddCartSuccess'),
    meta: {
      show: true,
    },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: ()=>import('@/pages/ShopCart'),
    meta: {
      show: true,
    },
  },
];
