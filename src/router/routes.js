// 引入路由組件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail"

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
        path: "/detail/:skuid",
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
]