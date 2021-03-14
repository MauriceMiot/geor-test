import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueI18n from 'vue-i18n'
import { languages, defaultLocale } from './assets/i18n/index.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const messages = Object.assign(languages)

Vue.use(VueI18n)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
var i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
