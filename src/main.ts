import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'virtual:uno.css'
import '@/assets/css/global.css'

console.log(`环境变量: `, import.meta.env)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
