import Vue from 'vue'
import App from './App'

Vue.prototype.productionTip = false

App.mpType = 'app'

const app = new Vue(App)

app.$mount()
