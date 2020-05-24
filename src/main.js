import Vue from 'vue'
import App from './App.vue'

import Actionbar from './components/Actionbar.vue'
import AbilityIcon from './components/AbilityIcon.vue'

Vue.config.productionTip = false

Vue.component('Actionbar', Actionbar)
Vue.component('AbilityIcon', AbilityIcon)

new Vue({
    render: h => h(App),
}).$mount('#app')
