import Vue from 'vue';
import Router from 'vue-router';
import Init from './components/Init.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Home from './components/Home.vue'
// import List from './components/List.vue'
// import Usr from './components/Usr.vue'
 
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',                   // ‘/’代表根目录
            name: 'init',
            component: Init
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children:[
                {
                    path: 'list',
                    name: 'list',
                    component: ()=>import('./components/List.vue')
                },
                {
                    path: 'usr',
                    name: 'usr',
                    component: ()=>import('./components/Usr.vue')
                }
            ]
        },
        
    ]
})