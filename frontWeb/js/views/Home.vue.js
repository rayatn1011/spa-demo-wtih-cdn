export default {
    name: 'Home',
    template: `
    首頁
    `,
    components: {
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, inject } = Vue;
        const router = VueRouter.useRouter();
        const route = VueRouter.useRoute()
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
        return {
            loginTestUser,
            logoutTestUser
        }
    },
};