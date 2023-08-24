import './assets/all.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import axios from 'axios'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$http = axios
app.mount('#app')
