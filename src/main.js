import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'
import '@/styles/index.scss'
import 'amfe-flexible'
import './assets/iconfont.css'
const vue = createApp(App)
// vue.config.globalProperties.$dayjs = dayjs
vue.use(store).use(router).use(vant).mount('#app')
// vue.prototype.getToken = function() {
//     console.log("getToken")
//  }