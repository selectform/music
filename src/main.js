import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js';

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);




Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')