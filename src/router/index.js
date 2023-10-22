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
            path: '*',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
            meta:{
                show: true
            },
        },
        {
            path: '/login',
            component: Login,
            meta:{
                show: false
            },
        },
        {
            path: '/register',
            component: Register,
            meta:{
                show: false
            },
        },
        {
            name: 'search',
            path: '/search/:keyword',
            component: Search,
            meta:{
                show: true
            },
        },
    ]
})