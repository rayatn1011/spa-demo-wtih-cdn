import { App } from './App.vue.js'
import { store } from './store/index.js'
import { router } from './router/index.js'


//創建Vue實例
const app = Vue.createApp(App)
.use(store)
.use(router)
.use(ElementPlus,{
    locale: ElementPlusLocaleZhTw
})
.mount('#app');