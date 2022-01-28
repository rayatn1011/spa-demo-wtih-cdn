export default {
    name: 'Home',
    template: `
    首頁
    <button type="button" class="btn" @click="loginTestUser">login</button>
    <button type="button" class="btn" @click="logoutTestUser">logout</button>
    `,
    components: {
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, inject } = Vue;
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
        return {
            loginTestUser,
            logoutTestUser
        }
    },
};