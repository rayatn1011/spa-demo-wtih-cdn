import { apiUserInfo } from '../../utils/api.js'

export const auth = {
    state: () => ({
        userInfo: null
    }),
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo ? userInfo.value : null;
        }
    },
    actions: {
        async getUserInfo(context) {
            const response = await apiUserInfo();
            if (response) {
                context.commit('setUserInfo', response.data)
            } else {
                context.commit('setUserInfo', null)
            }
        }
    }
}