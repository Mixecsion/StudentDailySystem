import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes= [
    {
        path:'/',
        name:'Home',
        component:()=>import('../views/Home.vue'),
    },
    {
        path:'/classtable',
        name:'classtable',
        component:()=>import('../views/Classtable.vue')
    },
    {
        path:'/setting',
        name:'setting',
        component:()=>import('../views/setting.vue')
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router
