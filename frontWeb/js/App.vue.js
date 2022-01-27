import TheHeader from './components/TheHeader.vue.js'
import TheFooter from './components/TheFooter.vue.js'

export const App = {
    template: `
    <the-header></the-header>
    <main>
        <router-view></router-view>
        <button type="button" class="btn" @click="loginTestUser">login</button>
        <button type="button" class="btn" @click="logoutTestUser">logout</button>
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

        const getAuthData = async () => {
            let getUserInfo = store.dispatch('getUserInfo');
            let getUserFunctions = store.dispatch('getUserFunctions');
            await Promise.all([getUserInfo, getUserFunctions]);
        };
        const loginTestUser = async () => {
            let account = 'taolinadmin';
            let password = 'taolinadmin@123';
            const login = await store.dispatch('login', {
                account: account,
                password: password
            });
            login.then(getAuthData);
        };
        const logoutTestUser = async () => {
            const logout = await store.dispatch('logout');
            logout.then(getAuthData);
        }
        onMounted(
            getAuthData
        )

        return {
            loginTestUser,
            logoutTestUser
        }
    },
};  