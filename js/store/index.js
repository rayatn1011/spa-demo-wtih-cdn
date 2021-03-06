import { auth } from './modules/auth.js'
import { utils } from './modules/utils.js'

export const Store = Vuex.createStore({
    modules: {
        auth: auth,
        utils: utils,
    }
})