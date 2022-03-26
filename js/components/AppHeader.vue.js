export default {
    name: 'AppHeader',
    template: `
    <header>
    <h1>
        <router-link :to="{name:'home'}">LOGO</router-link>
    </h1>
    <nav>
        <ul>
            <li>
                <router-link :to="{name:'gis'}" alt="gis圖臺">gis圖臺</router-link>
            </li>
            <li><a href="" alt="">連結2</a></li>
        </ul>
    </nav>
</header>
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