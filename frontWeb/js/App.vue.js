import TheHeader from './components/TheHeader.vue.js'
import TheFooter from './components/TheFooter.vue.js'

export const App = {
    template: `
    <the-header></the-header>
    <main>
        <router-view></router-view>
        <button type="button" class="btn">123</button>
    </main>
    <the-footer></the-footer>
    `,
    components: {
        TheHeader,
        TheFooter
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, provide, readonly } = Vue;
        const { useRouter, useRoute } = VueRouter;
        const { useStore } = Vuex;

        const getAuthData = async () => {
            try {
                await useStore().dispatch('getUserInfo');
                await useStore().dispatch('getUserFunctions');
            } catch {

            }
        }
        onMounted(
            getAuthData
        )

        return {
        }
    },
};  