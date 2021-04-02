import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

// element UI
import Element from 'element-ui'
import './styles/element-variables.scss'
// 国际化组件
import i18n from './lang/index'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
// 农历日历
import LunarFullCalendar from 'vue-lunar-full-calendar'

import './icons'
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(Element, {
  // set element-ui default size
  size: Cookies.get('size') || 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(LunarFullCalendar)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  i18n, // 国际化组件
  router, // 路由
  store,
  LunarFullCalendar,
  render: h => h(App)
})
