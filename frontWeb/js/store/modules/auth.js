import { authAPI } from '../../utils/api.js'

export const auth = {
    state: () => ({
        isLogin: false,
        userInfo: null,
        userFunctions: null,
    }),
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo.succ ? userInfo.value : null;
        },
        setIsLogin(state, loginStatus) {
            state.isLogin = loginStatus.succ ? true : false;
        },
        setUserFunctions(state, userFunctions) {
            state.userFunctions = userFunctions.succ ? userFunctions.values : null;
        }
    },
    actions: {
        async getUserInfo(context) {
            try {
                const response = await authAPI({
                    method: 'get',
                    url: 'user?{"a":1,"b":true}',
                })
                context.commit('setUserInfo', response.data);
            } catch (error) {
                console.error(error);
                alert('取得使用者資訊無回應');
            }
        },
        async getUserFunctions(context) {
            try {
                const response = await authAPI({
                    method: 'get',
                    url: 'functions/?{"path":"/前台"}',
                })
                context.commit('setUserFunctions', response.data)
            } catch (error) {
                console.error(error);
                alert('取得功能群組無回應');
            }
        },
        async login(context, value) {
            try {
                const response = await authAPI({
                    method: 'get',
                    url: `login/?{"user":"${value.account}","pwd":"${value.password}"}`,
                })
                context.commit('setIsLogin', response.data.succ);
            } catch (error) {
                console.error(error);
                alert('登入無回應');
            }
        },
        async logout(context) {
            try {
                const response = await authAPI({
                    method: 'get',
                    url: 'logout',
                })
                context.commit('setIsLogin', !response.data.succ);
            } catch (error) {
                console.error(error);
                alert('登出無回應');
            }
        },
    }
}