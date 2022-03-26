import initGis from '../utils/gis/init.js'


export default {
    name: 'GIS',
    template: `
    <div id="gis">
    <div id="gisRightControler"></div>
    <div id="gisFooterControler">
        <button type="button"> > </button>
        <ul class="items">
        <li v-for="(item,index) in footerControlers" :key="index">
        {{item.label}}
        </li>
        </ul>
    </div>
    <div id="gisFooterBar">
        <section id="scaleLine"></section>
        <section id="mousePosition">
            <div id="mousePositionWGS84">
                <span>WGS84經緯度</span>
            </div>
            <div id="mousePositionTWD97">
                <span>97座標</span>
            </div>
        </section>
    </div>
    </div>
    `,
    components: {
    },
    setup() {
        const { ref, reactive, onMounted, computed, watch, provide,inject } = Vue;
        const router = VueRouter.useRouter();
        const route = VueRouter.useRoute()
        const store = Vuex.useStore();

        const footerControlers = reactive([
            {
                label:'底圖套疊',
                value:'',
                icon:'',
            },
            {
                label:'量測功能',
                value:'',
                icon:'',
            },
            {
                label:'圖層套疊',
                value:'',
                icon:'',
            },
            {
                label:'KML套疊',
                value:'',
                icon:'',
            },
        ]);
        let gis;
        provide('gis', gis);
        onMounted(() => {
            gis = initGis();
        })
        return {
            footerControlers
        }
    },
};