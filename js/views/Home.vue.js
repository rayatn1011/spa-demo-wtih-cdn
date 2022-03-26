export default {
    name: 'Home',
    template: `
    <div>首頁</div>
    `,
    components: {
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, inject } = Vue;
        const router = VueRouter.useRouter();
        const route = VueRouter.useRoute()
        const store = Vuex.useStore();
        return {
        }
    },
};