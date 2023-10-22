/**
 * 配置路由的地方
 */

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

// 引入路由組件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

export default new VueRouter({
    routes:[
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
        {
            path: '/search',
            component: Search,
        },
    ]
})