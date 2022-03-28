import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes= [
    {
        path:'/',
        name:'home',
        component:()=>import('../views/Home.vue'),
    },
    {
        path:'/classtable',
        name:'classtable',
        component:()=>import('../views/Classtable.vue')
    },
    {
        path:'/workline',
        name:'workline',
        component:()=>import('../views/Workline.vue')
    },
    {
        path:'/navigation',
        name:'navigation',
        component:()=>import('../views/Navigation.vue')
    },
    {
        path:'/setting',
        name:'setting',
        component:()=>import('../views/Setting.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
