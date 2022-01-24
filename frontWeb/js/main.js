import { App } from './App.vue.js'
import { store } from './store/index.js'
import { router } from './router/index.js'


//創建Vue實例
Vue.createApp(App).use(store).use(router).mount('#app');