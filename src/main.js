import Vue from 'vue'
import App from './App.vue'

// Global Plugins
import AbilityUtils from './plugins/AbilityUtils.js'
import AbilityManager from './plugins/AbilityManager.js'

// Global Components
import Actionbar from './components/Actionbar.vue'
import AbilityIcon from './components/AbilityIcon.vue'

Vue.config.productionTip = false;

// Register Global Plugins
Vue.use(AbilityUtils);
Vue.use(AbilityManager);

// Register Global Components
Vue.component('Actionbar', Actionbar);
Vue.component('AbilityIcon', AbilityIcon);

new Vue({
    render: h => h(App),
}).$mount('#app');
