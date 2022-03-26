import { App } from './App.vue.js'
import { Store } from './store/index.js'
import { Router } from './router/index.js'


//創建Vue實例
const app = Vue.createApp(App)
.use(Store)
.use(Router)
.use(ElementPlus,{
    locale: ElementPlusLocaleZhTw
})
.mount('#app');