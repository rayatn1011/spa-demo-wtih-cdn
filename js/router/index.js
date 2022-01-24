export const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/Home.vue.js')
        },
        // { 
        //     path: '/name-subname', 
        //     component: About 
        // },
    
        // 將匹配所有內容並將其放在`$route.params.pathMatch`下
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('./views/NotFound.vue.js')
        }
    ],
})