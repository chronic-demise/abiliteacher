import Vue from 'vue'
import App from './App.vue'

import Actionbar from './components/Actionbar.vue'

Vue.config.productionTip = false

Vue.component('Actionbar', Actionbar)

new Vue({
    render: h => h(App),
}).$mount('#app')
