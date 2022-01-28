import TheHeader from './components/TheHeader.vue.js'
import TheFooter from './components/TheFooter.vue.js'

export const App = {
    template: `
    <the-header></the-header>
    <main>
        <router-view></router-view>
    </main>
    <the-footer></the-footer>
    `,
    components: {
        TheHeader,
        TheFooter
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, provide, inject, readonly } = Vue;
        const { useRouter, useRoute } = VueRouter;
        const store = Vuex.useStore();

        // const getAuthData = async () => {
        //     let getUserInfo = store.dispatch('getUserInfo');
        //     let getUserFunctions = store.dispatch('getUserFunctions');
        //     await Promise.all([getUserInfo, getUserFunctions]);
        // };
        // onMounted(
        //     getAuthData
        // )

        return {
        }
    },
};  