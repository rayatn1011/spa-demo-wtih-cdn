import AppHeader from './components/AppHeader.vue.js'
import AppFooter from './components/AppFooter.vue.js'
import AppMain from './components/AppMain.vue.js'

export const App = {
    template: `
    <AppHeader v-if="hasHeader"/>
    <AppMain />
    <AppFooter v-if="hasFooter"/>
    `,
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, provide, inject, readonly } = Vue;
        const router = VueRouter.useRouter();
        const route = VueRouter.useRoute()
        const store = Vuex.useStore();


        // 不使用Header
        const hasHeader = computed(() => {
            const excludedRoutes = [];
            return !excludedRoutes.includes(route.path)
        })
        // 不使用Footer
        const hasFooter = computed(() => {
            const excludedRoutes = ['/gis'];
            return !excludedRoutes.includes(route.path)
        })

        return {
            hasHeader,
            hasFooter,
        }
    },
};  