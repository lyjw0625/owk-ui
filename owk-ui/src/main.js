import Vue from 'vue'
import App from './App.vue'
import Message from '@/components/message/index'
import PageHelper from '@/components/pageHelper/PageHelper'
Vue.config.productionTip = false
Vue.use(Message)
Vue.component('owk-page-helper',PageHelper)
new Vue({
  render: h => h(App),
}).$mount('#app')