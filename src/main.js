import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
