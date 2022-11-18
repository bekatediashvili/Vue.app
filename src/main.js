import { createApp,markRaw } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import { createPinia } from 'pinia'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
    pinia.use(({ store }) => {
  store.router = markRaw(router)
})
    app.use(router)

    app.mount('#app')
