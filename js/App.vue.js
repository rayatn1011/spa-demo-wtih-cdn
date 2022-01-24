import TheHeader from './components/TheHeader.vue.js'
import TheFooter from './components/TheFooter.vue.js'

export const App = {
    template: `
    <the-header class="shrink-0"></the-header>
    <main class="grow">
        <router-view></router-view>
    </main>
    <the-footer class="shrink-0"></the-footer>
    `,
    components: {
        TheHeader,
        TheFooter
    },
    setup() {
    },
};  