// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

/* 引入基础控件：jQuery、bootstrap，layer，echarts，mock */

/* bootstrap */
import './assets/css/bootstrap/bootstrap.css'
import './assets/css/bootstrap/bootstrap-grid.css'
import './assets/css/bootstrap/bootstrap-reboot.css'

/* bootstrap-switch */
import './assets/css/bootstrap-switch/bootstrap-switch.css'

/* bootstrap-select  */
import './assets/css/bootstrap-select-1.13.0-dev/bootstrap-select.css'

/* font awesome  */
import './assets/css/font-awesome-4.7.0/css/font-awesome.css'
import './assets/css/layer/mobile/need/layer.css'

/* 引入项目基础css样式  */
import './assets/css/master_style.css'
import './assets/css/skins/_all-skins.css'


import './assets/js/bootstrap/bootstrap.js'
import './assets/js/bootstrap/bootstrap.bundle.js'
import './assets/js/bootstrap-switch/bootstrap-switch.js'
import './assets/js/bootstrap-select-1.13.0-dev/bootstrap-select.js'
import './assets/js/bootstrap-select-1.13.0-dev/bootstrap-select.js'
import './assets/js/axios/axios.js'
import './assets/js/mock/mock.js'
import './assets/js/echarts/echarts.js'
import './assets/css/layer/layer.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
