import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);
Vue.use(VueAxios, axios)

import './components/style/style.css';


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')