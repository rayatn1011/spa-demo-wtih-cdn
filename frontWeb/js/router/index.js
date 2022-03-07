import { store } from '../store/index.js'

// 創建router
export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../views/Home.vue.js'),
        },
        {
            path: '/gis',
            component: () => import('../views/Gis.vue.js'),
            meta: { requiresAuth: false }
        },
        // { 
        //     path: '/name-subname', 
        //     component: About 
        // },
        // 將匹配所有內容並將其放在`$route.params.pathMatch`下
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue.js')
        }
    ],
})

// 導航守衛
router.beforeEach((to, from) => {
    if (to.meta.requiresAuth && !store.state.auth.isLogin) {
        return {
            path: '/',
        }
    }
})