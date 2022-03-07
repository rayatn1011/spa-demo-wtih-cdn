import TheHeader from './components/TheHeader.vue.js'
import TheFooter from './components/TheFooter.vue.js'

export const App = {
    template: `
    <the-header v-if="hasHeader"/>
    <main>
        <router-view></router-view>
    </main>
    <the-footer v-if="hasFooter"/>
    `,
    components: {
        TheHeader,
        TheFooter
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, provide, inject, readonly } = Vue;
        const router = VueRouter.useRouter();
        const route = VueRouter.useRoute()
        const store = Vuex.useStore();
        
        
        // 不使用Header
        const hasHeader = computed(() => {
            const routeNotUsed = [];
            return routeNotUsed.includes(route.path) ? false : true
        })
        // 不使用Footer
        const hasFooter = computed(() => {
            const routeNotUsed = ['/gis'];
            return routeNotUsed.includes(route.path) ? false : true
        })

        // 取得使用者資料
        // const getAuthData = async () => {
        //     let getUserInfo = store.dispatch('getUserInfo');
        //     let getUserFunctions = store.dispatch('getUserFunctions');
        //     await Promise.all([getUserInfo, getUserFunctions]);
        // };
        // onMounted(
        //     getAuthData
        // )

        return {
            hasHeader,
            hasFooter
        }
    },
};  