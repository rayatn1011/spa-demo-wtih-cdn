import { authApi } from "../../utils/api.js";

export const auth = {
    state: () => ({
        isLogin: false,
        userInfo: null,
    }),
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setIsLogin(state, loginStatus) {
            state.isLogin = loginStatus;
        },
    },
    actions: {
        async getUserInfo(context) {
            await authApi
                .get("user")
                .then((response) => {
                    const userInfo = response.data;
                    context.commit("setUserInfo", userInfo);
                })
                .catch((error) => {
                    console.error(error);
                    alert("取得使用者資訊失敗");
                });
        },

        async login(context, value) {
            await authApi
                .post("login", {
                    data: {
                        userName: value.userName,
                        password: value.password,
                    },
                })
                .then((response) => {
                    const loginStatus = response.data.status;
                    context.commit("setIsLogin", loginStatus);
                })
                .catch((error) => {
                    console.error(error);
                    alert("登入失敗");
                });
        },
        async logout(context) {
            await authApi
                .post("logout", {
                    data: {
                        token: "",
                    },
                })
                .then((response) => {
                    const loginStatus = response.data.status;
                    context.commit("setIsLogin", loginStatus);
                })
                .catch((error) => {
                    console.error(error);
                    alert("登出失敗");
                });
        },
    },
};
