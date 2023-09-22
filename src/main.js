import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './style/index.css'

import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/all.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
