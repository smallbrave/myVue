import Vue from 'vue'
import router from 'vue-router'
import welcome from './components/loginAndRegister/welcome';
import login from './components/loginAndRegister/login'
import register from './components/loginAndRegister/register'
import show from './components/todolist/show'
import inputCon from './components/todolist/input'
import usr from './components/todolist/user'


Vue.use(router)
export default new router({
    mode: 'history',
    routes: [{
            path: '/',
            component: welcome
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/show',
            component: show,
            children: [{
                path: 'inputCon',
                component: inputCon
            }, {
                path: 'usr',
                component: usr
            }]
        }
    ]
})