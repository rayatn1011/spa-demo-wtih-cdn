import { Store } from '../store/index.js'

// 創建router
const Router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            name:'home',
            component: () => import('../views/Home.vue.js'),
        },
        {
            path: '/gis',
            name:'gis',
            component: () => import('../views/Gis.vue.js'),
            meta: { requiresAuth: false }
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('../views/NotFound.vue.js')
        }
    ],
})

// 導航守衛
Router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !Store.state.auth.isLogin) {
        return {
            path: '/',
        }
    }
})

export { Router }