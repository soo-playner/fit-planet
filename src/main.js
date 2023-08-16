import { createApp } from 'vue'
import store from './store/index'
import App from './App.vue'

//
import { router } from './routes/index.js'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
