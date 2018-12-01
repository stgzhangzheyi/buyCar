// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Muse from './muse-ui.config'
import $ from 'jquery'


Vue.use(VueAxios, axios)
Vue.use(Muse)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

store.dispatch('getData',axios)
store.dispatch('forway',axios)

router.beforeEach((to, from, next) => {
  // console.log('to=>',to)
  next()
})
// 跳转至message 触发路由守卫
router.beforeEach((to, from, next) => {
  store.commit('TOGOHOME', to.name)
  next()
})
router.replace('onepage')
